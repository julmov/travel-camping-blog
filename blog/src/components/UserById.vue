<template>
  <div class="user-profile">
    <div 
      class="background-image" 
      @dblclick="showBackgroundUploadCard"
      :style="{ backgroundImage: `url(${user.background || defaultBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      id="background"></div>
    <div class="avatar" @dblclick="showUploadCard">
      <img :src="user.avatar || defaultAvatar" alt="Avatar" id="avatar">
    </div>
    <div class="profile-info-block">
      <div class="btn-and-header">
        <h2 class="user-profile-head">{{ user.nickname }}</h2>
         <FollowButton :userId="user._id" id="followBtn"/>
      </div>
      <div class="posts-and-followers">
        
      </div>
      <!-- Include FollowButton component and pass the userId -->
     
    </div>
   
    <p>{{ user.description }}</p>
    <h2 class="user-profile-head">{{ postsCount }} posts</h2>
    <!-- Include more user details here -->
    
    <!-- Include UserPosts component -->
    <RetriveAllPostsOfUser :userId="user._id" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import RetriveAllPostsOfUser from './RetriveAllPostsOfUser.vue';
import Footer from './Footer.vue';
import FollowButton from './FollowButton.vue'; // Import the FollowButton component
import FollowingCount from './FollowingCount.vue'
import FollowersCount from './FollowersCount.vue'

const user = ref({});
const postsCount = ref(0);
const defaultAvatar = new URL('../assets/avatar.jpg', import.meta.url).href;
const defaultBackground = new URL('../assets/background.jpg', import.meta.url).href;

const route = useRoute();
const userId = route.params.id;

const token = localStorage.getItem('token');
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const fetchUser = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/users/user/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const data = await response.json();
    user.value = data;
    postsCount.value = Array.isArray(data.posts) ? data.posts.length : 0; // Ensure postsCount is correctly set
    
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

onMounted(fetchUser);
</script>

<style scoped>


.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
