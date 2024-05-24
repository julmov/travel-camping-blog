<template>
  <div>
    <p>Likes: {{ likesCount }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const postId = ref(null);
const likesCount = ref(0);

const fetchLikesCount = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/likes/all/post/${postId.value}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    const data = await response.json();
    likesCount.value = data.likesCount;
    console.log(data)
  } catch (error) {
    console.error('Error fetching likes count:', error);
  }
};

onMounted(async () => {
  await fetchLikesCount();
});
</script>

<style>
</style>