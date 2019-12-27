<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email {{ email }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        email: ''
      }
    },
    created () {
      axios.get('https://login-things.firebaseio.com/users.json')
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            console.log("a: ", key)
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          // khai báo 1 mảng user rồi pass vào đó key
          this.email = users[0].email
        })
        .catch(error => console.log(error))
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>