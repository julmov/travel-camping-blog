<template>
  <div class="user-profile">
    <TopBanner />
    <div class="background-image"></div>
    <div class="avatar" @click="changeAvatar">
      <img src="../assets/avatar.jpg" alt="Avatar" id="avatar">
    </div>
    <div class="profile-info-block">
      <div>
        <h2>John Doe</h2>
        <p>@nickname</p>
      </div>
      <div class="posts-and-followers">
        <p>posts</p>
        <p>followers</p>
        <p>following</p>
      </div>
      <button id="followBtn">Follow</button>
    </div>
    <p>Adipisci porro ipsum laudantium consectetur, recusandae blanditiis consequatur eveniet earum quasi autem quod corporis eligendi et repudiandae sapiente delectus quisquam ipsam ea. Excepturi facilis repellendus odit labore expedita recusandae dolorum est, eveniet dolorem laudantium tenetur quo temporibus! Modi, accusantium tempore nobis aliquid laudantium magnam quod sunt cupiditate, quasi et, facere ad possimus perspiciatis eos sed ipsum molestiae aperiam? Vero voluptatum illo quo possimus.</p>
  </div>
</template>

<script>
import TopBanner from '../components/TopBanner.vue';
export default {
  name: 'UserProfile',
  components: {
    TopBanner
  },
  methods: {
    changeAvatar() {
      // Implement logic to upload a new avatar image
      // For example, you can show a modal or navigate to a new route for uploading
      // Here you can make an API call to upload the new avatar
      // Example:
      // fetch('https://blog-camping-cbb2c4cfea86.herokuapp.com/users/upload-avatar', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      //   },
      //   body: JSON.stringify({
      //     avatar: 'NEW_IMAGE_URL'
      //   })
      // })
      // .then(response => {
      //   if (response.ok) {
      //     // Handle success
      //   } else {
      //     // Handle error
      //   }
      // })
      // .catch(error => {
      //   console.error('Error uploading avatar:', error);
      // });
    }
  }
};
</script>




<style src="../css/UserProfile.css"></style>
