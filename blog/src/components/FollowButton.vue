<template>
  <button @click="toggleFollow" class="add-show-btn">{{ isFollowing ? 'Unfollow' : 'Follow' }}</button>
</template>

<script setup>
import { ref, watch } from 'vue';
import { followingUserIds } from './FollowingCount.vue'; // Import the followingUserIds array
import { useRoute } from 'vue-router';


const props = defineProps({
  userId: {
    type: String,
    required: true
  }
});

const isFollowing = ref(false);

const token = localStorage.getItem('token');
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const checkFollowStatus = () => {
  isFollowing.value = followingUserIds.value.includes(props.userId);
};

const followUser = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/follow/user/${props.userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenValue}`,
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to follow user: ${errorData.message}`);
    }

    isFollowing.value = true;
    followingUserIds.value.push(props.userId); // Add user ID to the list
  } catch (error) {
    console.error('Error following user:', error);
  }
};

const unfollowUser = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_LINK + `/follow/delete/user/${props.userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to unfollow user: ${errorData.message}`);
    }

    isFollowing.value = false;
    const index = followingUserIds.value.indexOf(props.userId);
    if (index > -1) {
      followingUserIds.value.splice(index, 1); // Remove user ID from the list
    }
  } catch (error) {
    console.error('Error unfollowing user:', error);
  }
};

const toggleFollow = async () => {
  if (isFollowing.value) {
    await unfollowUser();
  } else {
    await followUser();
  }
};

// Watch the followingUserIds array for changes and update follow status
watch(followingUserIds, checkFollowStatus);

// Check follow status initially
checkFollowStatus();
</script>

<style scoped>
/* Add your button styles here */
</style>
