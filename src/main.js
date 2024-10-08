import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./components/router";

const pinia = createPinia();
const app = createApp(App);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(pinia);
app.use(router);
app.mount("#app");
