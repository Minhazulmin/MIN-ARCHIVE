import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/', component: () => import('../views/Layout.vue'),
        children: [
            // For Home page
            { path: '/', component: () => import('../views/Index.vue')},
            // For Laravel all components
            { 
            path: '/laravel', component: () => import('../views/laravel/layouts/Laravel.vue'),
                children: [
                    { path: '/laravel', name: 'laravel.home', component: () => import('../views/laravel/Index.vue') },
                    { path: '/laravel/create-zip-and-download', name: 'CreateZipAndDownload', component: () => import('../views/laravel/pages/CreateZipAndDownload.vue') },
                
                ]
            },
            { path: '/all-vuetify-component', name: 'all-vuetify-component', component: () => import('../views/AllVuetifyComponent.vue') },

        ],
       

    },
      // if any component or view not found then showing 404 page
      {
        path: '/:catchAll(.*)', component: () => import('./../views/Layout.vue'),
        children: [
            { path: '/:catchAll(.*)', name: '404', component: () => import('./../views/errors/404.vue'),}
        ]
    }

]

const router = createRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes
});

export default router;