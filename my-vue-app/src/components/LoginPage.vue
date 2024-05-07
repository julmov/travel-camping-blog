<template>
  <div class="login-page">
    <div class="login-page-form">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="text" placeholder="Username" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" id="password" v-model="password" required>
      </div>
      <p>If you dont have account yet, you can <router-link to="/register">Register</router-link></p>
      <button type="submit">Login</button>
    </form>
  </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here, such as sending a request to the server
      console.log('Login form submitted');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // You can add your login logic here, such as calling an API endpoint
      // For example:
      // axios.post('/api/login', { username: this.username, password: this.password })
      //   .then(response => {
      //     // Handle successful login
      //   })
      //   .catch(error => {
      //     // Handle login error
      //   });
    }
  }
};
</script>


<style src="../css/LoginPage.css"></style>