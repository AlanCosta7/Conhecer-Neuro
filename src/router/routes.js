
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'hipoxia-isquemia', name: 'hipoxia-isquemia', component: () => import('pages/temas/Hipoxia-isquemia.vue') },
      { path: 'introducao', name: 'introducao', component: () => import('pages/temas/Introducao.vue') },
      { path: 'malnutricao', name: 'malnutricao', component: () => import('pages/temas/Malnutricao.vue') },
      { path: 'nicotina-Alcool', name: 'nicotina-Alcool', component: () => import('pages/temas/Nicotina-Alcool.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
