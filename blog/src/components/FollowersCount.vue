<template>
  <p>{{ followers }}</p>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'FollowersCount',
  setup() {
    const followers = ref(0); // Initialize as 0 to store the count

    const token = localStorage.getItem('token');
    const tokenValue = token ? JSON.parse(token).token : null;

    const fetchFollowers = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_LINK + '/follow/user/followers', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch followers');
        }

        const data = await response.json();
        console.log(data);
        
        // Ensure that followers.value is set to the length of the followers array
        followers.value = Array.isArray(data) ? data.length : 0;
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    onMounted(fetchFollowers);

    return {
      followers,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
