<template>
  <div class="post-page">
  <div class="post-detail" v-if="post">
    <h1>{{ post.title }}</h1>
    <div class="post-photo-and-content">
    <img :src="post.image" alt="Post Image">
    <p>{{ post.content }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
        <FetchComments />
        <CreateComment />
  </div>
</template>

<script>
import CreateComment from './CreateComment.vue'
import FetchComments from './FetchComments.vue'

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';



export default {
  setup() {
    const post = ref(null);
    const route = useRoute();
    const postId = route.params.id;

    const fetchPost = async () => {
      try {
        const response = await fetch(`https://blog-camping-cbb2c4cfea86.herokuapp.com/posts/post/${postId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
          },
        });
        const data = await response.json();
        post.value = data;
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    onMounted(fetchPost);

    return { post, CreateComment , FetchComments};
  }
};


</script>

<style scoped>
img{
  width: 400px;
  height: auto;
}

.post-page{
  width: 100vw;
}

.input-comment{
  width: 50vw;
}
.post-page{
  margin: 40px;
}
.post-photo-and-content{
  display: flex;
  flex-direction: row;
}

.post-photo-and-content P{
  margin-left: 50px;
  font-size: 18px;
  width: 50%;
  line-height: 1.5;
  letter-spacing: normal;
}
</style>
