import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from "../views/HomeView.vue"; 
 const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:HomeViews,
    },
    {
      path: '/Categorie',
      name: 'Categorie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: () => import('../views/Product.vue')
    },
    {
      path: '/ProductDetail',
      name: 'Product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: () => import('../views/Popular_product.vue')
    }
  ]
})

export default router;
