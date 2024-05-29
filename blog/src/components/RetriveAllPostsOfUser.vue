<template>
  <div class="user-posts">
    <ul v-if="posts.length > 0">
      <li v-for="post in posts" :key="post._id" class="user-post" @click="goToPostDetail(post._id)">
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
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';


const router = useRouter();
const posts = ref([]);
const route = useRoute();
let userId = ref(route.params.id);

// Use userId from local storage if router doesn't provide an ID
if (!userId.value) {
  const storedId = localStorage.getItem('_id');
  if (storedId) {
    userId.value = JSON.parse(storedId).userId;
  }
}

const token = localStorage.getItem('token');
const tokenData = token ? JSON.parse(token) : null;
const tokenValue = tokenData ? tokenData.token : null;

const fetchUserPosts = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/posts/all/user/${userId.value}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });
    const data = await response.json();
    posts.value = data || []; // Assuming the API returns { posts: [] }
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
};

    const goToPostDetail = (postId) => {
      router.push({ name: 'PostDetail', params: { id: postId } });
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
  background-color: #ddd;
  border-radius: 5px;
  width: 100%;
}

.user-post {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  list-style-type: none;
  background-color: #5a5a5a99;
  height: auto;
  padding: 20px;
  width: calc(100% - 40px);
  max-width: 760px;
  margin-left: -35px;
}

.post-image {
  width: 200px;
  height: auto;
}
h2{
  padding-top: 24px;
  margin-left: 55px;
}

ul{
  min-height: fit-content;
 display: flex;
 flex-direction: column;
padding-top: 65px;
padding-bottom: 65px;
 align-items: center;
}
</style>
