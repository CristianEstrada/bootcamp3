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
        },
    },
    {
        path: '/iniciar-sesion',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            title: 'Iniciar sesión',
            auth: false,
            display: 'Iniciar sesión',
        },
    },
    {
        path: '/administracion/videos',
        name: 'Video',
        component: () =>
            import(
                /* webpackChunkName: "videos" */ '../views/secure/Videos.vue'
            ),
        meta: {
            display: 'Videos',
            auth: true,
            title: 'Administración / Videos',
        },
    },
    {
        path: '/administracion/categorias',
        name: 'Category',
        component: () =>
            import(
                /* webpackChunkName: "categories" */ '../views/secure/Categories.vue'
            ),
        meta: {
            display: 'Categorías',
            auth: true,
            title: 'Administración / Categorías',
        },
    },
    {
        path: '/administracion/usuarios',
        name: 'User',
        component: () =>
            import(/* webpackChunkName: "users" */ '../views/secure/Users.vue'),
        meta: {
            display: 'Usuarios',
            auth: false,
            title: 'Administración / Usuarios',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.auth);
//   const isAuthenticated = store.state.auth.user;

//   if (requiresAuth && isAuthenticated == null) {
//     next("/iniciar-sesion");
//   } else if (isAuthenticated != null && to.name == "Login") {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router