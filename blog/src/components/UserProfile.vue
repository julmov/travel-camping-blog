<template>
  <div class="user-profile">
    <div 
      class="background-image" 
      @dblclick="showBackgroundUploadCard"
      :style="{ backgroundImage: `url(${user.background || defaultBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
      id="background"></div>
    <div class="avatar" @dblclick="showUploadCard">
      <img :src="user.avatar || defaultAvatar" alt="Avatar" id="avatar">
    </div>
    <div class="profile-info-block">
      <div class="btn-and-header">
        <h2 class="user-profile-head">{{ user.nickname }}</h2>
              <div class="posts-and-followers">
        <p class="count-stats"><span class="span-posts">{{ posts }}</span>posts</p>
        <p class="count-stats"><FollowersCount /><span class="followers-span">followers</span></p>
        <p class="count-stats"><FollowingCount /><span>0</span>following</p>
      </div>
        <button id="followBtn" class="settingButton" @click="showEditCard">Settings</button>
      </div>
    </div>
    
    <p>{{ user.description }}</p>
    <!-- Pass userId as prop to RetriveAllPostsOfUser -->
    <h2 class="user-profile-head">Posts</h2>
    <RetriveAllPostsOfUser v-if="user._id" :userId="userId" />
    <!-- Upload Avatar Component -->
    <UploadAvatar v-if="showCard" @close="closeUploadCard" />
    <UploadBackground v-if="showBackgroundCard" @close="closeBackgroundUploadCard" @upload-success="fetchUserData" />
    <EditProfile v-if="isEditCardVisible" :currentUsername="user.nickname" :currentDescription="user.description" @close="closeEditCard" @update-success="fetchUserData" />
    <Footer />
  </div>
</template>

<script>
import UploadAvatar from './UploadAvatar.vue';
import UploadBackground from './UploadBackground.vue';
import EditProfile from './EditProfile.vue';
import RetriveAllPostsOfUser from './RetriveAllPostsOfUser.vue'; 
import Footer from './Footer.vue'
import FollowingCount from './FollowingCount.vue'
import FollowersCount from './FollowersCount.vue'

export default {
  name: 'UserProfile',
  components: {
    UploadAvatar,
    UploadBackground,
    EditProfile,
    RetriveAllPostsOfUser,
    Footer,
    FollowingCount,
    FollowersCount,
  },
  data() {
    return {
      showCard: false,
      showBackgroundCard: false,
      isEditCardVisible: false,
      user: {
        nickname: '',
        description: '',
        avatar: '',
        background: ''
      },
      defaultAvatar: new URL('../assets/avatar.jpg', import.meta.url).href,
      defaultBackground: new URL('../assets/default-background.jpg', import.meta.url).href,
      posts: 0,
      userId: '' // Define userId here
    };
  },
  methods: {
    showUploadCard() {
      this.showCard = true;
    },
    closeUploadCard() {
      this.showCard = false;
    },
    showBackgroundUploadCard() {
      this.showBackgroundCard = true;
    },
    closeBackgroundUploadCard() {
      this.showBackgroundCard = false;
    },
    showEditCard() {
      this.isEditCardVisible = true;
    },
    closeEditCard() {
      this.isEditCardVisible = false;
    },
    async fetchUserData() {
      const token = localStorage.getItem('token');
      const tokenValue = token ? JSON.parse(token).token : null;

      try {
        const response = await fetch(import.meta.env.VITE_API_LINK +'/users/current-user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenValue}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log(data);
        this.user = data;
        this.posts = data.posts.length;
        localStorage.setItem('_id', JSON.stringify({ userId: data._id }));
        console.log('id saved to localStorage:', data._id);
        this.userId = data._id; // Set userId here
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  },
  mounted() {
    this.fetchUserData();
  }
};
</script>

<style src='../css/UserProfile.css'>



</style>

