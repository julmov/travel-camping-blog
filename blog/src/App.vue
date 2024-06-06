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
        <div class="account-items">
          <font-awesome-icon :icon="['fas', 'user']" class="icon-avatar" />
        
          <router-link to="/profile" class="menu-link" id="account-link"> Account</router-link>
        
      </div>
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

}

.icon-avatar{
  border: 1px solid rgb(31, 31, 31);
  padding: 5px;
  border-radius: 50%;
}


.account-items{
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 0;
  justify-content: center;
  margin-top: 8px;
}

#account-link{
 margin-right: 40px;
 font-size: 14px;
 margin-left: 5px;
}

#account-link:hover{
color: rgb(65, 66, 66);
}

</style>
