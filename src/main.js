/* eslint-disable */
import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router';


createApp({
    extends: App,
    mixins: [import('../node_modules/bootstrap/scss/mixins/_breakpoints.scss')]
}).use(router).mount('#app');
