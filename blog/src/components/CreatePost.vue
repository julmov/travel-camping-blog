<template>
  <div class="create-post">
    <div class="create-page-form">
      <h1>New Post</h1>
      <form @submit.prevent="createPost">
        <div class="form-group">
          <input type="text" placeholder="Title" v-model="title" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Write Your Text Here" v-model="content" required></textarea>
        </div>
        <div class="form-group file">
          <input type="file" @change="handleFileUpload" class="upload-image" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('');
const content = ref('');
const image = ref(null);
const router = useRouter();

const handleFileUpload = (event) => {
  image.value = event.target.files[0];
};

const createPost = async () => {
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);
  if (image.value) {
    formData.append('image', image.value);
  }

  const token = localStorage.getItem('token');
  const tokenValue = token ? JSON.parse(token).token : null;

  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK +'/posts/create',
      {
        method: 'POST',
        headers: {
       
          Authorization: `Bearer ${tokenValue}`,
        },
        body: formData,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Post created successfully:', data);
      // Navigate to a different page or clear the form after successful post creation
      router.push('/home'); // Example navigation
    } else {
      console.error('Error creating post:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating post:', error);
  }
};
</script>

<style scoped>
/* @import "../css/CreatePost.css"; Import the CreatePost styles */

.create-post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create-page-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  margin: 20px 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.file {
  margin-bottom: 15px;
}

.upload-image {
  display: block;
  width: 100%;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
