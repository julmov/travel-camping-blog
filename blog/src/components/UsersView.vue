<template>
  <div class="users">
    <h1>Users</h1>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-card">
        <img :src="user.avatar || defaultAvatar" alt="Avatar" class="user-card-img">
        <div class="user-details">
          <span class="user-nickname">{{ user.nickname }}</span>
          <div class="buttons-profile">
            <button class="add-show-btn">Add friend</button>
            <button class="add-show-btn" @click="goToUserProfile(user._id)">Show profile</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// Reference to store user data
const users = ref([]);

// Default avatar image
const defaultAvatar = new URL('../assets/avatar.jpg', import.meta.url).href;

// Retrieve token from local storage
let token = localStorage.getItem('token');
let token1 = token ? JSON.parse(token) : null;
let tokenValue = token1 ? token1.token : null;

const router = useRouter();

const fetchUsers = async () => {
  try {
    const response = await fetch('https://blog-camping-cbb2c4cfea86.herokuapp.com/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const data = await response.json();
    users.value = data; // Update the users ref with fetched data
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const goToUserProfile = (userId) => {
  router.push({ name: 'UserProfile', params: { id: userId } });
};

// Fetch users when the component is mounted
onMounted(fetchUsers);
</script>

<style scoped>
@import "../css/UserCard.css";
@import "../css/UsersView.css";
</style>
