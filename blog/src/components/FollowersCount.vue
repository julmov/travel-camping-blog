<template>
    <p>{{ followers.length }}</p>
</template>

<script setup>
import { ref } from 'vue';

const followers = ref([]);
const userId = localStorage.getItem('_id') ? JSON.parse(localStorage.getItem('_id')).userId : null;

const token = localStorage.getItem('token');
const tokenValue = token ? JSON.parse(token).token : null;

const fetchFollowers = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + '/follow/user/followers', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch followers');
    }

    const data = await response.json();
    followers.value = Array.isArray(data.posts) ? data.followers.length : 0; 
  } catch (error) {
    console.error('Error fetching followers:', error);
  }
};



</script>

<style></style>