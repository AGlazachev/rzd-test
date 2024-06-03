import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: '/cart',
        component: () => import('../pages/CartPage.vue')
    },
    {
        path: '/auth',
        component: () => import('../pages/AuthPage.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

//Логика для авторизации
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth')
    if (to.path !== '/auth' && !isAuthenticated) next('/auth')
    else if (to.path === '/auth' && isAuthenticated) next('/')
    else next()
})

export default router;
