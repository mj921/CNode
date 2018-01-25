import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './router';

import App from './pages/app.vue';

Vue.use(VueRouter);

const app = new Vue({
    el:"#app",
    router,
    render:(ce) => ce(App)
});