<template>
  <div id="app" class ="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <!-- bind: để bắt đầu đính cái giá trị hoặc method vào -->
        <!-- inserted điền các cái update vào --> 
        <!-- update là lúc nó nhận được dữ liệu insert vào rồi ghi vào component --> 
        <!-- componentUpdated là khi nó đã update xong--> 
        <!-- unbind là khi mà directive bị remove rồi--> 
        <p v-text="'some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'"> green</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'blue', secondColor:'green', delay: 500}"> red</p>
      </div>
    </div>
  </div>
</template>

<script>
// local directive
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        // setTimeout(() => {
        //   if (binding.arg == 'background') {
        //     el.style.backgroundColor = binding.value;
        //   } else {
        //     el.style.color = binding.value;
        //   }
        // }, delay);
        if (binding.modifiers['blink']) {
          console.log("a")
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => { 
              // nếu curent color là second color thì đưa nó về main color và ngược lại
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay)
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
