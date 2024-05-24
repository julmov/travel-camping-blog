<template>
  <div class="edit-post">
    <h2>Edit Post</h2>
    <form @submit.prevent="savePost" class="formEditPost">
      <div class="inputDiv">
        <label for="title">Title:</label>
        <input id="title" v-model="title" type="text" class="input-field" />
      </div>
      <div class="inputDiv">
        <label for="content">Content:</label>
        <textarea id="content" v-model="content" class="input-content"></textarea>
      </div>
      <div class="inputDiv">
        <label for="image">Image URL:</label>
        <input id="image" v-model="image" type="text" class="input-field" />
      </div>
      <div class="button-group">
        <button type="submit" class="btn">Save</button>
        <button type="button" @click="cancel" class="btn btn-cancel">Cancel</button>
        <button type="button" @click="deletePost" class="btn btn-danger">Delete post</button>
      </div>
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
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/delete/post/${postId}`, {
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

const cancel = () => {
  router.push({ name: 'PostDetail', params: { id: postId } });
};

onMounted(fetchPost);
</script>

<style scoped>
.edit-post {
  width: 50%;
  margin: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 200px;
}

.input-field {
  width: calc(100% - 20px); /* Adjusted width */
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: auto; /* Centered input fields */
  
}
.input-content{
    width: calc(100% - 20px); /* Adjusted width */
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: auto; /* Centered input fields */
  min-height: 100px;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 700px;
}

.btn {
  width: 100px; /* Adjusted button width */
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
  width: 150px;
}

.btn:hover {
  background-color: #0056b3;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-danger:hover {
  background-color: #bb2d3b;
}

.btn-cancel {
  background-color: #6c757d; /* Gray color for cancel button */
}

.formEditPost{

  width: 100%;
}

.inputDiv{
  width: 500px;
}

</style>
