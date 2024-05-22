<template>
  <div class="comment">
    <form @submit.prevent="submitComment" class="comment-form">
      <input type="text" class="input-comment" v-model="content">
      <button type="submit" class="submit-comment-button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const postId = route.params.id;

const content = ref('');

const submitComment = async () => {
  const token = localStorage.getItem('token');
  const tokenValue = token ? JSON.parse(token).token : null;

  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK + `/comments/add/post/${postId}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
          'Content-Type': 'application/json', // Specify content type
        },
        body: JSON.stringify({ content: content.value }), // Pass the value of content
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Comment created successfully:', data);
      // Navigate to a different page or clear the form after successful comment creation
      router.push(`/post/${postId}`); // Example navigation
       window.location.reload(); 
    } else {
      console.error('Error creating comment:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating comment:', error);
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
.comment {
  margin-top: 20px;
}

.comment-form{
   width: 100%;
   margin-left: auto;
   margin-right: auto;
}

.input-comment {
  width: calc(100% - 20px);
  height: 25px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-comment-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-comment-button:hover {
  background-color: #45a049;
}
</style>
