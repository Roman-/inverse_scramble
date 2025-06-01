import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// import Font Awesome
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiClipboardCheckFill, BiClipboard } from "oh-vue-icons/icons/bi";
const Bi = Object.values({ BiClipboardCheckFill, BiClipboard });
addIcons(...Bi);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.mount('#app')
