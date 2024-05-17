  <template>
    <div class="top-container">
        <p><font-awesome-icon :icon="['fas', 'mountain-sun']" class="icons" /><router-link to="/home" class="menu-link">CampVenture</router-link></p>
        <div class="menu">
            <p><router-link to="/create" class="menu-link">New Post</router-link></p>
            <p>About Us</p>
            <p>Blog</p>
            <p><router-link to="/users" class="menu-link">Users</router-link></p>
      </div>
       <p>
          <font-awesome-icon :icon="['fas', 'user']" class="icons" />
          <router-link to="/profile" class="menu-link">Account</router-link>
        </p>
      </div>
    
    </template>

    <script>
    export default {
  name: 'TopBanner',
  // You can add component properties, data, methods, etc. here
  
}

     </script>

     <style>
    
    </style>