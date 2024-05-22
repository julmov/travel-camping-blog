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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import router from "../router";

const username = ref('');
const email = ref('');
const password = ref('');

const registerUser = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + "/users/sign-up", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: username.value,
        login: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();
    console.log(data); // Handle the response data as needed

    if (response.ok) {
      const router = useRouter();
      router.push('/home'); // Redirect to /home route after successful registration
    } else {
      console.error('Registration failed:', data); // Handle registration error
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style src="../css/RegisterPage.css"></style>