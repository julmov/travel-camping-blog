import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import HomePage from "../components/HomePage.vue";
import RegisterPage from "../components/RegisterPage.vue";
import UserProfile from "../components/UserProfile.vue";
import CreatePost from "../components/CreatePost.vue";
import UsersView from "../components/UsersView.vue";
import PostById from "../components/PostById.vue";
import UserById from "../components/UserById.vue";
import PostsList from "../components/PostsList.vue";
import EditPost from "../components/EditPost.vue";



const routes = [
  { path: "/", component: HomePage, meta: { requiresAuth: true } },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/profile", component: UserProfile },
  { path: "/home", component: HomePage },
  { path: "/create", component: CreatePost },
  { path: "/users", component: UsersView },
  { path: "/posts", component: PostsList },
  { path: "/post/:id", component: PostById, name: "PostDetail", props: true },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserById,
    props: true,
  },
  {
    path: "/edit-post/:id",
    name: "EditPost",
    component: EditPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check authentication
// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token !== undefined && token !== null;
  const isLoginPage = to.path === '/login';
  const isRegisterPage = to.path === '/register';

  if (!isLoginPage && !isRegisterPage && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
