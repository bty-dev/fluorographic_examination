import { createRouter, createWebHistory } from 'vue-router'
import NotificationsPage from "@/pages/NotificationsPage";
import AuthPage from "@/pages/AuthPage";
import MainPage from "@/pages/MainPage";
import EmployeesPage from "@/pages/EmployeesPage";
import ChartsPage from "@/pages/ChartsPage";


const routes = [
  {
    path: "/notifications",
    component: NotificationsPage,
    name: "NotificationsPage"
  },
  {
    path: "/auth",
    component: AuthPage,
    name: "AuthPage"
  },
  {
    path: "/main",
    component: EmployeesPage,
    name: "Employees"
  },
  {
    path: "/employee",
    component: MainPage,
    name: "MainPage"
  },
  {
    path: "/charts",
    component: ChartsPage,
    name: "ChartsPage"
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
})

export default router
