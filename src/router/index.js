// Importer les bibliothèques et composants nécessaires
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ErrorPage404 from '../views/ErrorPage404.vue';

// Définir les routes
const routes = [
  { path: '/', component: HomePage },          // La page d'accueil
  { path: '/:catchAll(.*)', component: ErrorPage404 },  // Page 404 pour toutes les autres routes
];

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

