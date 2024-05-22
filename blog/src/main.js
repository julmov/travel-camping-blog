import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import CreateComment from "./components/CreateComment.vue";
import FetchComments from "./components/FetchComments.vue";
import Footer from "./components/Footer.vue";
import PopularUsers from './components/PopularUsers.vue'
import LatestPosts from "./components/LatestPosts.vue";
import CurrentUser from "./components/CurrentUser.vue";
import FollowersCount from "./components/FollowersCount.vue";
import FollowingCount from "./components/FollowingCount.vue";


//import "./style.css"


// Add the new solid icons to the library
library.add(fas);
library.add(fab);

// Register the FontAwesomeIcon component globally
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("CreateComment", CreateComment);
app.component("FollowingCount", FollowingCount);
app.component("FetchComments", FetchComments);
app.use(router);
app.mount("#app");

export default app
