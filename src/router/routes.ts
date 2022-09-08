import { RouteRecordRaw } from 'vue-router';

import MainLayout from "layouts/MainLayout.vue";

import IndexPage from "pages/IndexPage.vue";
import Login from 'pages/auth/Login.vue';
import UserCalendar from 'pages/calendar/userCalendar.vue';
import AuthLayout from "layouts/AuthLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login }
    ],
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect : '/auth/login' },
      { path: 'userCalendar', component: UserCalendar }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
