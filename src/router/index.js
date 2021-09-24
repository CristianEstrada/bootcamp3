import { createRouter, createWebHistory } from 'vue-router'
// import store from "../store";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: {
            display: 'Inicio',
            auth: false,
            title: 'Inicio',
        }

    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router