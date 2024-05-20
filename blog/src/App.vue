<template>
  <div id="app">
    <!-- Your navigation bar/header -->
    <header v-if="!isLoginPage && !isRegisterPage">
      <div class="top-container">
        <p><font-awesome-icon :icon="['fas', 'mountain-sun']" class="icons" /><router-link to="/home" class="menu-link">CampVenture</router-link></p>
        <div class="menu">
          <p><router-link to="/create" class="menu-link">New Post</router-link></p>
          <p>About Us</p>
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
    <footer v-if="!isHomePage">
      <div>
        <h2>SUBCRIBE TO OUR <br> NEWSLETTER</h2>  
        <input type="text" placeholder="Enter Your Email Address" id="subscribe">
      </div>
      <div>
        <h3>Sitemap</h3>  
        <p>Travel Map</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>Account</p>
      </div>
      <div>
        <h3>Contacts</h3>
        <p>514-307-1555</p>
        <p>campventure@gmail.com</p>
        <div class="footer-icons"> 
          <font-awesome-icon :icon="['fab', 'instagram']" /> 
          <font-awesome-icon :icon="['fab', 'facebook']" /> 
          <font-awesome-icon :icon="['fab', 'youtube']" /> 
          <font-awesome-icon :icon="['fab', 'tiktok']" /> 
          <font-awesome-icon :icon="['fab', 'x-twitter']" />  
        </div>
      </div>
    </footer>
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
    },
    isHomePage() {
      return this.$route.path === '/home'; // Adjust the path according to your route configuration
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
