<template>
  <div>
    <div class="user-gallery">
      <div v-for="user in users" :key="user.id" class="user-card">
        <img :src="user.avatar || defaultAvatar" alt="Avatar" class="user-card-img">
        <div class="buttons-profile">
       
          <button class="add-show-btn">Show profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const defaultAvatar = new URL('../assets/avatar.jpg', import.meta.url).href;

const users = ref([]);
let token = localStorage.getItem('token');
let token1 = token ? JSON.parse(token) : null;
let tokenValue = token1 ? token1.token : null;

onMounted(async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + '/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    console.log(data)
    users.value = data.sort((a, b) => b.posts.length - a.posts.length).slice(0, 5);

  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<style scoped>
@import '../css/UserCard.css';
</style>
