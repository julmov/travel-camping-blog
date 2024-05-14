<template>
    <div class="home-page">
    <div class="big-background-img-box">
      <div class="top-container">
        <p><font-awesome-icon :icon="['fas', 'mountain-sun']" class="icons" />CampVenture</p>
        <div class="menu">
            <p>Travel Map</p>
            <p>About Us</p>
            <p>Blog</p>
      </div>
       <p>
          <font-awesome-icon :icon="['fas', 'user']" class="icons" />
          <router-link to="/profile" class="accountLink">Account</router-link>
        </p>
      </div>
      <div class="content-inside-img">
      <div class="folow-box">
      <p class="follow">follow us</p>
      <font-awesome-icon :icon="['fab', 'facebook-f']" class="social-media-icons"/>
      <font-awesome-icon :icon="['fab', 'instagram']" class="social-media-icons"/>
       </div>
       <div class="header-box">
        <div class="line-and-header">
    <p class="line">_____</p> 
    <h2 id="join-us"> Join us for exiting travel adventure</h2>
        </div>
     <h1 id="header">It's Great Time <br> to Start Living Now</h1>
     <button class="know-more">Know More</button>
       </div>
  </div>
  </div>
  <div class="infoContainer">
    <div class="box1">
      <div class="text-content">
<div class="line-and-text"><p class="line">_______</p><p class="about-advices-map">About</p></div>
<h2 class="headers">Become Part of Our Family Travel Lovers. Essential Camping Gear</h2>
<p>Explore the must-have gear and equipment for a successful camping trip. From tents and sleeping bags to cooking gear and outdoor essentials, discover what you need to make your camping experience enjoyable and comfortable.</p>
<p class="about-advices-map">read more <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
      </div>
 <img src="../assets/photo1.jpg" alt="Camping Gear Image" class="first-and-third-img">

      </div>
      <div class="box2">
         <img src="../assets/photo2.png" alt="Camping Tips Image" class="second-img">
        <div class="text-content">
          <div class="line-and-text"><p class="line">______</p><p class="about-advices-map">Advices</p></div>
<h2 class="headers">Camping Tips and Tricks</h2>
<p>Get insider tips and tricks for a smooth camping experience. Learn about campsite setup, meal planning, safety precautions, and outdoor skills. Whether you're a novice camper or an experienced outdoor enthusiast, find valuable advice to enhance your camping adventures.</p>
<p class="about-advices-map">read more <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
        </div>
      </div>
      <div class="box3">
        <div class="text-content">
<div class="line-and-text"><p class="line">______</p><p class="about-advices-map">Travel Map</p></div>
<h2 class="headers">Best Camping Destinations</h2>
<p>Discover stunning camping destinations around the world. From picturesque national parks to serene lakeside campgrounds, find inspiration for your next outdoor adventure. Learn about unique camping spots, amenities, and activities to make your trip memorable.</p>
<p class="about-advices-map">read more <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
        </div>
 <img src="../assets/photo3.jpg" alt="Camping Destinations Image" class="first-and-third-img">
      </div>
    </div>
    <div class="middle-row-letsgo">
      <div class="left-part">
      <h2 class="lets-explore-header">Let's Explore <br> The World Together</h2>
      <button>Let's Go</button>
       </div>
      <p class="right-part">Embark on Adventures, Share Experiences, Connect with Nature. Join our Camping Community Today! Together, let's ignite the spirit of adventure and make every camping trip an unforgettable journey. Become a part of CampVenture today and let the adventures begin!</p>
     
      </div>
      <div class="photo-gallery">
        <img src="../assets/picture1.jpg" alt="landscape" class="picture">
        <img src="../assets/picture2.jpg" alt="landscape" class="picture">
        <img src="../assets/picture3.jpg" alt="landscape" class="picture">
        <img src="../assets/picture4.jpg" alt="landscape" class="picture">
        <img src="../assets/picture5.jpg" alt="landscape" class="picture">
        
      </div>
      <div class="users-reviews">
        <h2 class="blog-headers">Popular Posts</h2>
        <div class="popular-posts">
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
            <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
             <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
             <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
        </div>
        <h2 class="blog-headers">Latest Posts</h2>
         <div class="popular-posts">
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
            <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
             <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
          <div class="post-box">
            <img src="../assets/post1.jpg" alt="landscape" class="post-pic">
            <div class="small-avatar"><img src="../assets/avatar.jpg" alt="Avatar" id="avatar"></div>
             <h3>Unforgettable weekend</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, minus, ut, dicta possimus illum dolor quas modi numquam eos porro itaque aperiam!</p>
            <p>_____________________________________________</p>
            <p>read more  <font-awesome-icon :icon="['fas', 'arrow-right-long']" /></p>
          </div>
        </div>
        
        <h2 class="blog-headers">Popular Users</h2>
        <div class="user-gallery">
        <div class="user-card"><img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img">
       <div class="buttons-profile"> <button class="add-show-btn">Add friend</button><button class="add-show-btn">Show profile</button></div>
        </div>
        <div class="user-card"><img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img"><div class="buttons-profile"> <button class="add-show-btn">Add friend</button><button class="add-show-btn">Show profile</button></div></div>
        
        <div class="user-card"><img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img"><div class="buttons-profile"> <button class="add-show-btn">Add friend</button><button class="add-show-btn">Show profile</button></div></div>
        <div class="user-card"><img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img"><div class="buttons-profile"> <button class="add-show-btn">Add friend</button><button class="add-show-btn">Show profile</button></div></div>
        <div class="user-card"><img src="../assets/avatar.jpg" alt="Avatar" class="user-card-img"><div class="buttons-profile"> <button class="add-show-btn">Add friend</button><button class="add-show-btn">Show profile</button></div></div>
        
      </div>
    <footer>
      <div>
  <h2>SUBCRIBE TO OUR <br> NEWSLETTER</h2>  
  <input type="text" placeholder="Enter Your Email Address" id="subscribe">
  </div>
   <div>
  <h3>Sitemap</h3>  
  <p>Travel Map</p>
  <p>About Us</p>
  <p>Blog</p>
  <p>Account</p>
   </div>
   <div>
  <h3>Contacts</h3>
  <p>514-307-1555</p>
  <p>campventure@gmail.com</p>
  <div class="footer-icons"> <font-awesome-icon :icon="['fab', 'instagram']" /> <font-awesome-icon :icon="['fab', 'facebook']" /> <font-awesome-icon :icon="['fab', 'youtube']" /> <font-awesome-icon :icon="['fab', 'tiktok']" /> <font-awesome-icon :icon="['fab', 'x-twitter']" />  </div>
  </div>
    </footer>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Handle login logic here, such as sending a request to the server
      console.log('Login form submitted');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // You can add your login logic here, such as calling an API endpoint
      // For example:
      // axios.post('/api/login', { username: this.username, password: this.password })
      //   .then(response => {
      //     // Handle successful login
      //   })
      //   .catch(error => {
      //     // Handle login error
      //   });
    }
  }
};
</script>

<style scoped>
@import "../css/HomePage.css"; /* Import the HomePage styles */

</style>