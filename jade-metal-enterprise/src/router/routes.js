const routes = [
  {
    path: "/",

    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      {
        path: "products",
        component: () => import("pages/ProductPage.vue"),
      },
      {
        path: "partners",
        component: () => import("pages/PartnersPage.vue"),
      },
      {
        path: "contact-us",
        component: () => import("pages/ContactsPage.vue"),
      },
      {
        path: "sitemap.xml",
        component: () => import("pages/sitemap.xml"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
