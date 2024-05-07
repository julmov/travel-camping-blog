<template>
  <div class="register-page">
     <div class="register-page-form">
    <h1>Sign In</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
       
        <input type="text" id="username" placeholder="Username" v-model="username" required>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <input type="password" id="password" placeholder="Password" v-model="password" required>
      </div>
      <p>If you already have an account you can <router-link to="/login">Log In</router-link></p>
      <button type="submit">Register</button>
    
    </form>
      </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      // Handle registration logic here
      console.log('Register form submitted');
      console.log('Username:', this.username);
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // You can add your registration logic here, such as calling an API endpoint
      // For example:
      // axios.post('/api/register', { username: this.username, email: this.email, password: this.password })
      //   .then(response => {
      //     // Handle successful registration
      //   })
      //   .catch(error => {
      //     // Handle registration error
      //   });
    }
  }
};
</script>

<style src="../css/RegisterPage.css"></style>