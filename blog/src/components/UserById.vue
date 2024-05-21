<template>
  <div class="user-profile">
    <h1>{{ user.nickname }}</h1>
    <img :src="user.avatar || defaultAvatar" alt="Avatar" class="user-avatar">
    <p>{{ user.description }}</p>

    <!-- Include more user details here -->

    <!-- Include UserPosts component -->
    <RetriveAllPostsOfUser :userId="user._id" />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import RetriveAllPostsOfUser from './RetriveAllPostsOfUser.vue'; // Import the UserPosts component
import Footer from './Footer.vue'

// Reference to store user data
const user = ref({});
const defaultAvatar = new URL('../assets/avatar.jpg', import.meta.url).href;

// Retrieve the user ID from the route parameters
const route = useRoute();
const userId = route.params.id;

const token = localStorage.getItem('token');
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const fetchUser = async () => {
  try {
    const response = await fetch(`https://blog-camping-cbb2c4cfea86.herokuapp.com/users/user/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const data = await response.json();
    user.value = data; // Update the user ref with fetched data
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

// Fetch the user data when the component is mounted
onMounted(fetchUser);
</script>

<style scoped>
.user-profile {
  text-align: center;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
