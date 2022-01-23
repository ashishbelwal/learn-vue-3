import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/login"
import Signup from "../components/signup"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "VueBasic",
        component: () => import("@/components/information/VueBasic"),
      },
      {
        path: "/hello-world",
        name: "HelloWorld",
        component: () => import("@/components/information/HelloWorld"),
      },
      {
        path: "/project-structure",
        name: "ProjectStructure",
        component: () => import("@/components/information/ProjectStructure"),
      },
      {
        path: "/binding-directives",
        name: "BindingDirectives",
        component: () => import("@/components/information/BindingDirectives"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component : Login
  },
  {
    path: "/signup",
    name: "signup",
    component : Signup
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
