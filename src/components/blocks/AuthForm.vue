<template>
  <main class="main">
    <form class="form" id="form-login" action="">
      <h2 class="heading">АВТОРИЗОВАТЬСЯ</h2>

      <label class="label" for="login">
        <input class="input" type="text" id="login" v-model="login" placeholder="логин">
        <span class="message"></span>
      </label>

      <label class="label" for="password">
        <input class="input" type="password" id="password" v-model="password" placeholder="пароль">
        <span class="message"></span>
      </label>

      <button class="submit-button" type="submit" v-on:click="auth">Вход</button>
    </form>
  </main>
</template>

<script>
// import { ref } from 'vue'
// import axios from 'axios'

export default {
  name: 'AuthForm',
  components: {
  },
  props: {
  },
  // setup () {
  data () {
    // return {
    //   API_URL: 'https://team3.activemap.ru'
    //   login: '',
    //   password: '',
    // }
    return { postData: { login: '', password: '' } }
  },
  methods: {
    auth () {
      fetch('https://team3.activemap.ru/rest/auth/by-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: this.login,
          password: this.password
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    // async auth () {
    //   await axios
    //   .post(
    //     `${this.API_URL}/rest/auth/by-login`,
    //     {login: this.login, password: this.password },
    //     {headers: {'Content-Type':
    //     'application/json'},
    //     }
    //   )
    //   .then(({data}) => {
    //     this.user = data.user
    //   })
    // },
  }

  //   const axios = require('axios').default;

  //   axios.post('https://team3.activemap.ru/rest/auth/by-login', {
  //     "login": document.getElementById('login').value,       // логин
  //     "password": document.getElementById('password').value  // пароль
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // }
  // return {
  //   axios
  // }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  // background-color: #1B2473;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 45px;
  width: 600px;
  height: 412px;
  border-radius: 20px;
  background: #FFFFFF;
}

.heading {
  color: #D58C51;
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
}

.input {
  width: 80vh;
  height: 10vh;
  border-radius: 50px;
  border: solid 2px #D58C51;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  color: #B9ADAD;
  padding-left: 25px
}

.submit-button {
  width: 260px;
  height: 70px;
  border-radius: 50px;
  background: #D58C51;
  border: none;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  cursor: pointer;
}
</style>
