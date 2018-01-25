import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/home.vue";
import Detail from "./pages/detail.vue";

Vue.use(VueRouter);

const routes = [
    {path:"/",component:Home},
    {path:"/detail/:id",component:Detail}
];

const router = new VueRouter({
    routes
})

export default router;