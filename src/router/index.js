import { createRouter, createWebHistory } from "vue-router";

// Import para as páginas fora da dashboard
import home from '../pages/home.vue';

//Componentes
import login from '../components/Login.vue';
import register from '../components/Register.vue';
// Imports para Dashboard
import dashboard from '../pages/master/dashboard.vue';
import automoveis from '../pages/automoveis.vue';
import resume from '../pages/resume.vue';



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
        name: 'resume',
        path: '/resume',
        component: resume
      },
      {
        name: 'automoveis',
        path: '/automoveis',
        component: automoveis
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