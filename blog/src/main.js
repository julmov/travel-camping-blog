import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



// Add the new solid icons to the library
library.add(fas);
library.add(fab);

// Register the FontAwesomeIcon component globally
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
