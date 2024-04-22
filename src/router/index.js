import { createRouter, createWebHistory } from "vue-router";

// Import para as páginas fora da dashboard
import home from '../pages/home.vue';

//Componentes
import login from '../components/Login.vue';
import register from '../components/Register.vue';
// Imports para Dashboard
import dashboard from '../pages/master/dashboard.vue';
import banners from '../pages/banners.vue';
import usuarios from '../pages/usuarios.vue';



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
        name: 'banners',
        path: '/banners',
        component: banners
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