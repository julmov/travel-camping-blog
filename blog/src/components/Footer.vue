 <template>
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
      <div class="list-and-icons">
      <div>
        <h3>Contacts</h3>
        <p>514-307-1555</p>
        <p>campventure@gmail.com</p>
      </div>
       <ul class="social-icons-list">
      <li class="item">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'instagram']" class="icon"/>
        </a>
      </li>
      <li class="item">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
        </a>
      </li>
      <li class="item">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'youtube']" class="icon"/>
        </a>
      </li>
      <li class="item">
        <a href="#">
           <font-awesome-icon :icon="['fab', 'x-twitter']" class="icon"/>
        </a>
      </li>
    </ul>
    </div>
    </footer>
</template>

<script>
export default {

};
</script>

<style>
@import "../css/social-icons.css"

</style>