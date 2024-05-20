<template>
  <div class="comments">
    <h1>Comments</h1>
    <ul class="comments-list">
      <li v-for="comment in comments" class="comment-box">
        <div class="user-details">
            <span class="post-content">{{ comment.userId.nickname }}</span>
          <span class="post-content">{{ comment.content }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const postId = route.params.id;
    const comments = ref([]);
    const token = localStorage.getItem("token");
    const tokenValue = token ? JSON.parse(token).token : null;

    const fetchComments = async () => {
      try {
        const response = await fetch(`https://blog-camping-cbb2c4cfea86.herokuapp.com/comments/all/post/${postId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });
        const data = await response.json();
        comments.value = data;
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    onMounted(fetchComments);

    return { comments };
  }
};
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
}

.user-details {
  display: flex;
   flex-direction: column;
}

.post-content {
  font-size: 14px;
  height: 40px;

}
</style>
