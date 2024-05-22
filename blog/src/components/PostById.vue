<template>
  <div class="post-page">
    <div class="post-detail" v-if="post">
      <h1>{{ post.title }}</h1>
      <div class="post-photo-and-content">
        <img :src="post.image" alt="Post Image" />
        <p>{{ post.content }}</p>
      </div>
      <font-awesome-icon
        v-if="isUserPost"
        :icon="['fas', 'pen-to-square']"
        class="btn-post-edit"
        @click="editPost"
      />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <FetchComments />
  </div>
</template>

<script setup>

import FetchComments from './FetchComments.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUser } from '../components/CurrentUser.vue'; // Correct path

const { user, fetchUserData } = useUser();
const post = ref(null);
const route = useRoute();
const router = useRouter();
const postId = route.params.id;
const isUserPost = ref(false);

const fetchPost = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    const data = await response.json();
    post.value = data;

    // Check if the post belongs to the current user
    if (user.value && post.value.userId === user.value._id) {
      isUserPost.value = true;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const editPost = () => {
  router.push({ name: 'EditPost', params: { id: postId } });
};

onMounted(async () => {
  await fetchUserData(); // Fetch user data before fetching the postff
  await fetchPost();
});

</script>

<style scoped>
img {
  width: 400px;
  height: auto;
}

.post-page {
  width: 100vw;
}

.input-comment {
  width: 50vw;
}

.post-page {
  margin: 40px;
}

.post-photo-and-content {
  display: flex;
  flex-direction: row;
}

.post-photo-and-content p {
  margin-left: 50px;
  font-size: 18px;
  width: 50%;
  line-height: 1.5;
  letter-spacing: normal;
}

.btn-post-edit {
  margin-left: calc(100% - 30px);
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>
