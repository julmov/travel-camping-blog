<template>
  <div class="posts">
    <h1>Posts</h1>
    <div class="posts-list">
      <div v-for="post in posts" :key="post._id" class="post-box" @click="goToPostDetail(post._id)">
        <img :src="post.image" alt="Post Image" class="post-pic">
  
        <h3 class="latest-posts-headers">{{ post.title.substring(0, 40) }}</h3>
        <div class="read-more">
        <p>{{ post.content.substring(0, 150) + '...' }}</p>
        <p>_____________________________________________</p>
        <p>read more <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Footer from './Footer.vue';

export default {
  name: 'PostsList',
  components: {
    Footer,
  },
  setup() {
    const posts = ref([]);
    const router = useRouter();
    const token = localStorage.getItem("token");
    const tokenValue = JSON.parse(token)?.token;

    const fetchPosts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_LINK + '/posts/all', {
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

<style scoped>
.posts {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.posts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.post-box {
  cursor: pointer;
  width: 250px;
  border: 1px solid #ddd;
  overflow: hidden;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  background-color: #7c797985;
}

.post-box:hover {
  transform: scale(1.05);
}

.post-pic {
  width: 100%;
  height: 145px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
}

.latest-posts-headers {
  font-size: 1.2em;
  margin: 10px 0;
  color: #ddd;
}

.post-content {
  margin: 10px 0;
}

.read-more {
margin-top: auto;
}

</style>
