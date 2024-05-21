<template>
  <div class="edit-post">
    <h2>Edit Post</h2>
    <form @submit.prevent="savePost">
      <div>
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="content"></textarea>
      </div>
      <div>
        <label for="image">Image URL:</label>
        <input id="image" v-model="image" type="text" />
      </div>
      <button type="submit">Save</button>
      <button type="button" @click="deletePost">Delete</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const postId = route.params.id;

const title = ref('');
const content = ref('');
const image = ref('');

const fetchPost = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    const data = await response.json();
    title.value = data.title;
    content.value = data.content;
    image.value = data.image;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const savePost = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/update/${postId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title.value, content: content.value, image: image.value }),
    });
    if (!response.ok) throw new Error('Failed to save post');
    router.push({ name: 'PostDetail', params: { id: postId } });
  } catch (error) {
    console.error('Error saving post:', error);
  }
};

const deletePost = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/delete/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    if (!response.ok) throw new Error('Failed to delete post');
    router.push({ name: 'PostsList' });
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};

onMounted(fetchPost);
</script>

<style scoped>
.edit-post {
  width: 50%;
  margin: auto;
}

form div {
  margin-bottom: 10px;
}

button {
  margin-right: 10px;
}
</style>
