 import { createRouter, createWebHistory } from 'vue-router'


 // git init 
 // git add .
 // git status 
 // git clog
 // git commit
 // keyboard i
 // Finish task 1
 // * Remove unused files
 // *update
 // escape
 //:wq = write and quit 
 // git remote add origin 
 //  
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
  
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
