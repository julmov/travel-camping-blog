<template>
  <div class="create-post">
    <div class="create-page-form">
    <h1>New Post</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <input type="text" placeholder="Title" id="title" v-model="username" required>
      </div>
      <div class="form-group">
        <input type="text" placeholder="Write Your Text Here" id="post-text" v-model="password" required>
      </div>
      <button type="submit">submit</button>
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


<style scoped>
@import "../css/CreatePost.css"; /* Import the HomePage styles */

</style>