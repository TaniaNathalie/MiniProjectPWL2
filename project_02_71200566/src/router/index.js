import { createRouter, createWebHistory } from 'vue-router'
import ChattingView from '../views/ChattingView.vue'

const routes = [
  {
    path: '/chatting',
    name: 'ChattingView',
    component: ChattingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
