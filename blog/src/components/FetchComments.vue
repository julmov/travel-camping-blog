<template>
  <div class="comments">
    <h1>Comments</h1>
    <ul class="comments-list">
      <li
        v-for="comment in comments"
        :key="comment._id"
        class="comment-box"
        @click="toggleMenu(comment)"
      >
        <div class="user-details">
          <span class="post-content">{{ comment.userId.nickname }}</span>
          <span class="post-content">{{ comment.content }}</span>
          <EditOrDeleteComments
            :comment="comment"
            @onEdit="fetchComments"
            @onDelete="fetchComments"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import EditOrDeleteComments from './EditOrDeleteComments.vue';
import { useUser } from '../components/CurrentUser.vue'; // Correct path

const { user, fetchUserData } = useUser();
const route = useRoute();
const postId = route.params.id;
const comments = ref([]);
const token = localStorage.getItem('token');
const tokenValue = token ? JSON.parse(token).token : null;

const fetchComments = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK +`/comments/all/post/${postId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    const data = await response.json();
    comments.value = data.map(comment => ({ ...comment, showMenu: false }));
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const toggleMenu = (comment) => {
  comments.value.forEach(c => {
    c.showMenu = (c === comment) && (c.userId.nickname === user.value.nickname);
  });
};

onMounted(async () => {
  await fetchUserData(); // Fetch user data before fetching comments
  await fetchComments();
});
</script>

<style scoped>
.comments {
  margin-top: 20px;
}

.comments-list {
  list-style-type: none;
  padding: 0;
}

.comment-box {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  position: relative; /* Make sure the comment box is positioned relatively */
}

.user-details {
  display: flex;
  flex-direction: column;
}

.post-content {
  font-size: 14px;
}
</style>

