<template>
    <div class="home-page">
    <div class="big-background-img-box">
    
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
     <button class="know-more"><router-link to="/posts" class="link-know-more">Know More</router-link></button>
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
     
      <button><router-link to="/create" class="link-know-more">Let's Go</router-link></button>
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
     
        <h2 class="blog-headers">Latest Posts</h2>
        
        <LatestPosts />
        <h2 class="blog-headers">Popular Users</h2>
        <PopularUsers />
        <Footer />
      </div>
  </div>
</template>

<script setup>
import Footer from './Footer.vue'
import LatestPosts from './LatestPosts.vue'
import PopularUsers from './PopularUsers.vue'

</script>

<style scoped>
@import "../css/HomePage.css"; /* Import the HomePage styles */

.link-know-more{
  text-decoration: none;
  font-size: 16px;
  color: white;
}

</style>