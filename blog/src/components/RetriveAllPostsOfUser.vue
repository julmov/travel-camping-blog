<template>
  <div class="user-posts">
    <h2>Posts</h2>
    <ul v-if="posts.length > 0">
      <li v-for="post in posts" :key="post._id" class="user-post">
        <h3>{{ post.title }}</h3>
        <img :src="post.image" alt="Post Image" class="post-image">
        <p>{{ post.content }}</p>
      </li>
    </ul>
    <p v-else>No posts found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const posts = ref([]);
const userNickname = ref('');
const route = useRoute();
const userId = ref(route.params.id);

const token = localStorage.getItem('token');
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const fetchUserPosts = async () => {
  try {
    const response = await fetch(`https://blog-camping-cbb2c4cfea86.herokuapp.com/posts/all/user/${userId.value}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const data = await response.json();
    console.log(data); // Log the entire response to understand its structure
    posts.value = data || []; // Assuming the API returns { posts: [] }
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
};

// Fetch posts when the component is mounted
onMounted(fetchUserPosts);

// Watch for route changes to refetch posts
watch(() => route.params.id, (newId) => {
  userId.value = newId;
  fetchUserPosts();
});
</script>

<style scoped>
.user-posts {
  margin-top: 20px;
}

.user-post {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.post-image {
  width: 100%;
  height: auto;
}
</style>
