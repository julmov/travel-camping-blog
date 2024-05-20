<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul class="posts-list">
      <li v-for="post in posts" :key="post._id" class="user-card" @click="goToPostDetail(post._id)">
        <div class="user-details">
          <img :src="post.image" alt="Post Image" class="post-image">
          <span class="post-title">{{ post.title }}</span>
          <span class="post-content">{{ post.content }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const posts = ref([]);
    const router = useRouter();
    const token = localStorage.getItem("token");
    const tokenValue = JSON.parse(token)?.token;

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://blog-camping-cbb2c4cfea86.herokuapp.com/posts/all', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });
        const data = await response.json();
        posts.value = data;
        console.log(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const goToPostDetail = (postId) => {
      router.push({ name: 'PostDetail', params: { id: postId } });
    };

    onMounted(fetchPosts);

    return { posts, goToPostDetail };
  }
};
</script>

<style>

  .posts {
  width: 100%;
  height: 100vh;
  margin: 50px;
}
/* Your styles here */
.post-image {
  width: 100%; /* Adjust as needed */
  height: 145px; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between image and text */
}
.post-title {
  font-weight: bold; /* Make the title stand out */
}
.post-content {
  /* Any additional styling for the content */
}
.user-card {
  cursor: pointer;
  width: 250px;
  height: 250px;
  border: 1px solid white;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
.posts-list{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.user-details{
  display: flex;
  flex-direction: column;
}
</style>
