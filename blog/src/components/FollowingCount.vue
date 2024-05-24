<template>
  <div>
    <p>{{ followingCount }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'FollowingCount',
  setup() {
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
        console.log(data);
        followingCount.value = data.length; // Correct assignment to reactive variable
        followingUserIds.value = data.map(user => user._id); // Extract user IDs
      } catch (error) {
        console.error('Error fetching following count:', error);
      }
    };

    onMounted(fetchFollowingCount);

    return {
      followingCount,
      followingUserIds,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>