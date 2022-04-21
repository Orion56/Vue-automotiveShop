import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Cars from '../views/Cars/Cars.vue'
import SingleCar from '../views/Cars/SingleCar.vue'
import Account from '../views/Account.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cars/:id',
    name: 'SingleCar',
    component: SingleCar,
    props: true
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
