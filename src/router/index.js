import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// import Films from '@/views/Films/Index'
// import NowPlaying from '@/views/Films/NowPlaying'
// import ComingSoon from '@/views/Films/ComingSoon';
// import Detail from '@/views/Films/Detail';
// import Cinemas from '@/views/Films/Index';
// import Center from '@/views/Films/Index';

import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'


const routes = [
  {
    path: "/",
    redirect: "/films/nowPlaying"
  },
  ...filmRouter,
  cinemaRouter,
  centerRouter,
  
  // {
  //   path:"/films",
  //   component: Films,
  //   children: [
  //     {path: "nowPlaying", component: NowPlaying},
  //     {path: "comingSoon", component: ComingSoon}
  //   ]
  // },
  // {
  //   path: "/film/: filmID",
  //   component: Detail
  // },
  // {
  //   path: "/cinemas",
  //   component: Cinemas,
  // },
  // {
  //   path: "/center",
  //   component: Center
  // }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
