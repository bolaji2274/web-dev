import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadMore from '../views/shopview/ReadMore.vue'
import ShopDescription from '../views/shopview/ShopDescription.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
	{
	path: '/readmore',
	name: 'readmore',
        component: () => import('../views/shopview/ReadMore.vue')
      },
      {
        path: '/description',
      name: 'ShopDescription',
        component: () => import('../views/shopview/ShopDescription.vue')
      },

  ]
})

export default router
