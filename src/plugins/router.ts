import { createRouter, createWebHistory } from "vue-router";
import homepageView from "@/views/homepage-view.vue";
import todoListView from "@/views/todo-list-view.vue";

const routes = [
    {
        path: "/",
        redirect: '/home-page'
    },
    { path: '/home-page', component: homepageView },
    { path: '/landing-page', component: homepageView },
    { path: '/todo-list/:id', component: todoListView, props: true }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;