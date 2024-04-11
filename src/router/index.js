import { createRouter, createWebHistory } from "vue-router";
import { useStore } from 'vuex';
import { computed } from "vue";
import AnalyticsPage from "@/views/analytics-page.vue";
import AuthorizationPage from "@/views/authorization-page.vue";
import WelcomePage from "@/views/welcome-page.vue";
import NotFoundPage from "@/views/not-found-page.vue";

const routes = [
    {
        path: "/",
        component: WelcomePage
    },
    {
        path: '/analytics',
        component: AnalyticsPage,
        meta: { requiresAccount: true }
    },
    {
        path: '/authorization',
        component: AuthorizationPage
    },
    {
        path: '/:catchAll(.*)',
        component: NotFoundPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
});

// Навигационный охранник
router.beforeEach((to, from, next) => {
    const store = useStore();
    const leadhitSiteID = computed(() => store.getters['authorizationModule/getLeadHitSiteId']);

    // Проверяем, если пользователь пытается зайти на страницу /analytics
    if (to.path === '/analytics') {
        // Если leadhitSiteID равен null, перенаправляем пользователя на страницу /authorization
        if (!leadhitSiteID.value) {
            next('/authorization');
        } else {
            next();
        }
    } else {
        // Если это не страница /analytics, просто продолжаем навигацию
        next();
    }
});

export default router;
