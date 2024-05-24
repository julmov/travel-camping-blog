<template>
  <div class="popular-posts">
    <div v-for="post in posts" :key="post._id" class="post-box" @click="goToPostDetail(post._id)">
      <img :src="post.image" alt="landscape" class="post-pic">
      <h3 class="latest-posts-headers">{{ post.title }}</h3>
      <p>{{ post.content.substring(0, 150) + '...'}}</p>
      <p>_____________________________________________</p>
      <p>read more <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();
let token = localStorage.getItem('token');
let token1 = token ? JSON.parse(token) : null;
let tokenValue = token1 ? token1.token : null;

const fetchPosts = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + '/posts/all', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    posts.value = data.slice(0, 3); // Display only the first three posts
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const goToPostDetail = (postId) => {
  router.push({ name: 'PostDetail', params: { id: postId } });
};

onMounted(fetchPosts);
</script>

<style scoped>
@import '../css/HomePage.css';
.post-pic {
  margin-bottom: 20px;
}

.post-box:hover {
  transform: scale(1.05);
}
</style>