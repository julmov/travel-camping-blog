<template>
  <div class="post-page">
    <div class="post-detail" v-if="post">
      <h1>{{ post.title }}</h1>
      <div class="post-photo-and-content">
           <img
          v-if="post.image.match(/\.(jpg|jpeg|png|gif)$/i)"
          :src="post.image"
          alt="Post Image"
          class="post-image"
        />
          <video v-else controls autoplay muted>
            <source
              :src="post.image"
              :type="
                post.image.match(/\.(mp4|webm|ogg)$/i)
                  ? 'video/' + post.image.split('.').pop()
                  : ''
              "
            />
          </video>
        <p>{{ post.content }}</p>
      </div>
      <div class="post-info">
        <div class="who-posted-date">
          <p>Posted by: {{ userNickname }}</p>
          <p>Created: {{ post.created_at.substring(0, 10) }}</p>
             <p><LikePost v-if="post._id" :postId="post._id" :isLiked="post.isLiked" /></p>
        </div>
        <font-awesome-icon
          v-if="isUserPost"
          :icon="['fas', 'pen-to-square']"
          class="btn-post-edit"
          @click="editPost"
        />
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <FetchComments />
    <Footer />
  </div>
</template>

<script setup>
import FetchComments from './FetchComments.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUser } from '../components/CurrentUser.vue'; // Correct path
import Footer from './Footer.vue'
import LikePost from "./LikePost.vue";

const { user, fetchUserData } = useUser();
const post = ref(null);
const route = useRoute();
const router = useRouter();
const postId = route.params.id;
const isUserPost = ref(false);
const userNickname = ref('');

const fetchPost = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK +`/posts/post/${postId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    const data = await response.json();
    post.value = data;
    console.log(data);

    // Check if the post belongs to the current user
    if (user.value && post.value.userId === user.value._id) {
      isUserPost.value = true;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const fetchUser = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/users/user/${post.value.userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).token}`,
      },
    });
    const userData = await response.json();
    userNickname.value = userData.nickname;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

const editPost = () => {
  router.push({ name: 'EditPost', params: { id: postId } });
};

onMounted(async () => {
  await fetchUserData(); // Fetch user data before fetching the post
  await fetchPost();
  if (post.value) {
    await fetchUser(); // Fetch user only if post is available
  }
});
</script>

<style scoped>
img {
  width: 400px;
  height: auto;
}

.post-page {
  width: 100vw;
}

.input-comment {
  width: 50vw;
}

.post-page {
  margin: 40px;
}

.post-photo-and-content {
  display: flex;
  flex-direction: row;
}

.post-photo-and-content p {
  margin-left: 50px;
  font-size: 18px;
  width: 50%;
  line-height: 1.5;
  letter-spacing: normal;
}

.btn-post-edit {
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}

.post-info {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.who-posted-date {
  display: flex;
  flex-direction: column;
}

.who-posted-date p {
  margin: 0;
}
</style>
