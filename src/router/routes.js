const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Todo.vue") },
      { path: "/help", component: () => import("pages/Help.vue") }
    ]
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "forgotPassword",
        name: "ForgotPassword",
        component: () => import("pages/ForgotPassword.vue")
      },
      {
        path: "login",
        name: "Login",
        component: () => import("pages/Auth.vue")
      },
      {
        path: "register",
        name: "Register",
        component: () => import("pages/Auth.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
