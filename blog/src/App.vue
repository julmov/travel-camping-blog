<template>
  <div id="app">
    <!-- Your navigation bar/header -->
    <header v-if="!isLoginPage && !isRegisterPage">
      <div class="top-container">
        <p><font-awesome-icon :icon="['fas', 'mountain-sun']" class="icons" /><router-link to="/home" class="menu-link">CampVenture</router-link></p>
        <div class="menu">
          <p><router-link to="/create" class="menu-link">New Post</router-link></p>
          <p><router-link to="/posts" class="menu-link">Blog</router-link></p>
          <p><router-link to="/users" class="menu-link">Users</router-link></p>
        </div>
        <p>
          <font-awesome-icon :icon="['fas', 'user']" class="icons" />
          <router-link to="/profile" class="menu-link">Account</router-link>
        </p>
      </div>
    </header>

    <!-- Your main content area -->
    <main>
      <!-- The <router-view> component will render the matched component for the current route -->
      <router-view></router-view>
    </main>

    <!-- Your footer or additional content -->
  
  </div>
</template>

<script>
export default {
  computed: {
    isLoginPage() {
      return this.$route.path === '/login'; // Adjust the path according to your route configuration
    },
    isRegisterPage() {
      return this.$route.path === '/register'; // Adjust the path according to your route configuration
    }
  }
};
</script>

<style>
@import "./style.css"; 

/* Component styles (scoped or global) */
#app {
  font-family: Arial, sans-serif;
  /* Add more styles as needed */
}

.top-container {
  /* Your top container styles */
}
</style>
