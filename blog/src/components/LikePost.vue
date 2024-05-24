<template>
  <div>
    <span class="likescount" style="color:white">Likes: {{ likesCount }}</span>
    <font-awesome-icon :icon="['fas', 'heart']" @click="toggleLike" :style="{ color: isLiked ? 'red' : 'azure' }"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["postId", "isLiked"]);

let isLiked = ref(props.isLiked);
let likesCount = ref(0);

const token = localStorage.getItem("token");
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const getAllLikes = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/likes/all/post/${props.postId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to get likes: ${errorData.message}`);
    }

    const data = await response.json();
    likesCount.value = data;
  } catch (error) {
    console.error("Error getting post:", error);
  }
};

const addLike = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/likes/add/post/${props.postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to like post: ${errorData.message}`);
    }

    isLiked.value = true;
    likesCount.value++;
  } catch (error) {
    console.error("Error liking post:", error);
  }
};

const deleteLike = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/likes/delete/post/${props.postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to dislike post: ${errorData.message}`);
    }

    isLiked.value = false;
    likesCount.value--;
  } catch (error) {
    console.error("Error disliking post:", error);
  }
};

const toggleLike = async () => {
  if (isLiked.value) {
    await deleteLike();
  } else {
    await addLike();
  }
};

// Fetch initial likes count when the component is mounted
getAllLikes();
</script>

<style scoped>
.heart {
  margin-top: 20px;
  font-size: 30px;
  color: red;
}
.likescount{
    margin-right: 5px;
}
</style>

<!-- <template>
  <div>
    <i
      @click="toggleLike"
      class="fa-solid fa-heart heart"
      :style="isLiked ? { color: 'red' } : { color: 'gray' }"
    ></i>
    <span>{{ likesCount }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["postId", "isLiked"]);
console.log(props.postId);
console.log(props.isLiked);

let isLiked = ref(props.isLiked);
let likesCount = ref(0);

const token = localStorage.getItem("token");
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const getAllLikes = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK + `/likes/all/post/${props.postId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    const data = await response.json();
    likesCount.value = data;


    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to get likes: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error geting post:", error);
  }
};

getAllLikes();

const addLike = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK + `/likes/add/post/${props.postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to like post: ${errorData.message}`);
    }

    isLiked = true;
  } catch (error) {
    console.error("Error liking post:", error);
  }
};

const deleteLike = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LINK + `/likes/delete/post/${props.postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenValue}`,
        },
      }
    );
    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to dislike post: ${errorData.message}`);
    }

    isLiked = false;
  } catch (error) {
    console.error("Error disliking post:", error);
  }
};

const toggleLike = async () => {
  if (isLiked.value) {
    await deleteLike();
  } else {
    await addLike();
  }
  window.location.reload();
};
</script>

<style scoped>
.heart {
  margin-top: 20px;
  font-size: 30px;
  color: red;
}
</style> -->
