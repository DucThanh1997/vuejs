import Vue from 'vue'
import App from './App.vue'

// dùng cho toàn bộ component được
export const eventBus = new Vue({
  // tạo thằng này ra đễ đỡ phải duplicate code nhiều, bh cần dùng gọi đến là xong
  methods: {
    changeAge(age) {
      this.$emit('changeAge', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
