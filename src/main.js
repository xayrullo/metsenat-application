import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './styles/app.css';
import './utils/libraries';
import './utils/tools';

createApp(App).use(store).use(router).mount('#app')
