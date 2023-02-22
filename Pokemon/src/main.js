import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./assets/main.css";
import './index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse, faTable, faUser, faBook, faGamepad, faMagnifyingGlass, faArrowsRotate, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHouse, faTable, faUser, faBook, faGamepad, faMagnifyingGlass, faArrowsRotate, faMars, faVenus);

const app = createApp(App);

app.use(router, VueAxios, axios);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");
