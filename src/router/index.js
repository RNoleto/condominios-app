import { createRouter, createWebHistory } from "vue-router";

// Import para as páginas fora da dashboard
import home from '../pages/home.vue';

//Componentes
import login from '../components/Login.vue';
import register from '../components/Register.vue';


// Imports para Dashboard
import dashboard from '../pages/master/dashboard.vue';
import usuarios from '../pages/usuarios.vue';
import banners from '../pages/banners.vue';
import post from '../pages/post.vue';
import category from '../pages/category.vue';
import UserEdit from '../pages/UserEdit.vue';
import BannerEdit from '../pages/BannerEdit.vue';
import CreatePost from '../pages/CreatePost.vue';



const routes = [

  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'register',
    path: '/register',
    component: register
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: dashboard,
    children: [
      {
        name: 'usuarios',
        path: '/usuarios',
        component: usuarios
      },
      {
        name: 'UserEdit',
        path: '/editar-usuario/:id',
        component: UserEdit,
        props: true,
      },
      {
        name: 'banners',
        path: '/banners',
        component: banners
      },
      {
        name: 'BannerEdit',
        path: '/editar-banner/:id',
        component: BannerEdit
      },
      {
        name: 'CreatePost',
        path: '/editar-post/:id',
        component: CreatePost
      },
      {
        name: 'post',
        path: '/post',
        component: post
      },
      {
        name: 'category',
        path: '/category',
        component: category
      }
    ]
  }
];

const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}