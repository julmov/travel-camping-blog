<template>
  <div class="comment">
    <form @submit.prevent="submitComment" class="comment-form">
      <div class="input-with-icon">
        <font-awesome-icon :icon="['fas', 'smile']" class="icon-smile" @click="toggleEmojiPicker" />
        <input type="text" class="input-comment" v-model="content" placeholder="Type your comment here...">
        <button type="submit" class="submit-comment-button">Submit</button>
      </div>
      <!-- Add @select listener to EmojiPicker -->
    </form>
  </div>
   <EmojiPicker v-if="showEmojiPicker" :native="true" @select="insertEmoji"  class="emojipicker"/>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';

const showEmojiPicker = ref(false);

const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value;
};

const content = ref('');

const insertEmoji = (emoji) => {
  content.value += emoji.i; // Insert the selected emoji's native representation
  toggleEmojiPicker(); // Optionally close the emoji picker after selection
};

const route = useRoute();
const router = useRouter();
const postId = route.params.id;

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
  position: relative;
  z-index: 5;
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

.input-with-icon {
  position: relative;
  width: auto;
}

.comment {
  margin-top: 20px;
}

.comment-form {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.input-with-icon {
  position: relative;

   width: calc(100% - 50px); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-smile {
  position: absolute;
 font-size: 22px;
  z-index: 3;
  right: -10px; /* Adjust right position to position the icon on the right side */
  top: 21%;
  transform: translateY(-50%);
  color: #888; /* Adjust icon color as needed */
}



.input-comment {
   width: 100% ; /* Adjust width to accommodate the icon */
     z-index: 1;
  height: 25px;
  padding: 10px;
  padding-right: 40px; /* Adjust padding to accommodate the icon */
  border: 1px solid #ccc;
  border-radius: 4px;/* Adjust padding to ensure text doesn't overlap with icon */
}

.emojipicker{
position: absolute;
right: 80px;
top: 850px;
}
</style>
