<template>
  
  <div class="users">
    <h1>Users</h1>

      <ul class="user-list">
      <li v-for="user in users" :key="user.id" class="user-card">
        <img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img">
        <div class="user-details">
          <span class="user-nickname">{{ user.nickname }}</span>
          <div class="buttons-profile">
            <button class="add-show-btn">Add friend</button>
            <button class="add-show-btn">Show profile</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);
 let token = localStorage.getItem("token");
 console.log(token)
    let token1 = JSON.parse(token);
    let tokenValue = token1.token;
    console.log(tokenValue)

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
    console.log(users)
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

// Fetch users when the component is mounted
onMounted(fetchUsers);
</script>

<style scoped>
@import "../css/UserCard.css";
@import "../css/UsersView.css";
</style>
