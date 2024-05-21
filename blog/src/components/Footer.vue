 <template>
<footer v-if="!isHomePage">
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
        <div class="footer-icons"> 
          <font-awesome-icon :icon="['fab', 'instagram']" /> 
          <font-awesome-icon :icon="['fab', 'facebook']" /> 
          <font-awesome-icon :icon="['fab', 'youtube']" /> 
          <font-awesome-icon :icon="['fab', 'tiktok']" /> 
          <font-awesome-icon :icon="['fab', 'x-twitter']" />  
        </div>
      </div>
    </footer>
</template>

<script>
export default {

};
</script>

<style>

</style>