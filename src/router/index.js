import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Platos from '../views/Platos.vue';
import Usuarios from '../views/Usuarios.vue';
import Pedidos from '../views/Pedidos.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/platos', name: 'Platos', component: Platos },
  { path: '/usuarios', name: 'Usuarios', component: Usuarios },
  { path: '/pedidos', name: 'Pedidos', component: Pedidos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
