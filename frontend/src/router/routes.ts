import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      {
        path: '/announcement',
        component: () => import('src/pages/Announcement.vue')
      },
      {
        path: '/self_assessment',
        component: () => import('src/pages/SelfAssessment.vue')
      },
      {
        path: '/about',
        component: () => import('src/pages/About.vue')
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
