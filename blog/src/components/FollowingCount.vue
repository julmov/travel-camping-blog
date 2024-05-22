<template>
  <div>
    <p>{{ followingCount }}</p>
  </div>
</template>

<script>

import { ref, onMounted } from 'vue';

const followingCount = ref(0);
const followingUserIds = ref([]); // This will store the list of user IDs being followed
const token = localStorage.getItem('token');
const token1 = token ? JSON.parse(token) : null;
const tokenValue = token1 ? token1.token : null;

const fetchFollowingCount = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_LINK}/follow/user/following`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch following list');
    }

    const data = await response.json();
   // followingCount.value = data.length;
   console.log(data)
    this.followingCount.value = data.length;
    followingUserIds.value = data.map(user => user._id); // Extract user IDs
  } catch (error) {
    console.error('Error fetching following count:', error);
  }
};

onMounted(fetchFollowingCount);

// Export the followingUserIds array so it can be imported in other components
export { followingUserIds };
</script>

<style>
</style>