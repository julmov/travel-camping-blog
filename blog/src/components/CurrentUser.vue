<template>

</template>

<script>
import { ref } from 'vue';

export function useUser() {
  const user = ref({
    nickname: '',
    description: '',
    avatar: '',
    background: '',
  });
  const posts = ref(0);
  const userId = ref('');
  const token = localStorage.getItem('token');
  const tokenValue = token ? JSON.parse(token).token : null;

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://blog-camping-cbb2c4cfea86.herokuapp.com/users/current-user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenValue}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      user.value = data;
      posts.value = data.posts.length;
      localStorage.setItem('_id', JSON.stringify({ userId: data._id }));
      userId.value = data._id;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return { user, posts, userId, fetchUserData };
}

export default {
  setup() {
    return {
      useUser,
    };
  },
};
</script>


<style>

</style>