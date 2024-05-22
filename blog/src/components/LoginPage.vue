<template>
  <div class="login-page">
    <div class="login-page-form">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="text"
            placeholder="Username"
            id="username"
            v-model="login"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <p>
          If you dont have account yet, you can
          <router-link to="/register">Register</router-link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const login = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });

    const data = await response.json();
    console.log(data); // Handle the response data as needed

    if (response.ok && data.access_token) {
      // Save token and email to localStorage
      localStorage.setItem(
        "token",
        JSON.stringify({ token: data.access_token })
      );
      localStorage.setItem("email", JSON.stringify({ email: data.login }));
      console.log("Email saved to localStorage:", data.login);
      console.log("Token saved to localStorage:", data.access_token);

      // Redirect to another route using Vue Router
      router.push("/home");
    }
  } catch (error) {
    alert(error)
    console.error("Error:", error);
  }
};
</script>

<style src="../css/LoginPage.css"></style>
