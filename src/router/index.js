import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("@/views/SearchVacancy")
        },
        {
            path: "/search",
            component: () => {
                if (window.localStorage.getItem("userType") === 'ADMIN')
                    return import("@/views/SearchSummary");
                else
                    return import("@/views/SearchVacancy");
            }
        },
        {
            path: "/login",
            component: () => import("@/views/Login")
        },
        {
            path: "/registration",
            component: () => import("@/views/Registration")
        },
        {
            path: "/summaries",
            component: () => import("@/views/worker/summary/SummariesList")
        },
        {
            path: "/summaries/create",
            component: () => import("@/views/worker/summary/SummaryForm")
        },
        {
            path: "/summaries/:summaryId",
            component: () => import("@/views/worker/summary/SummaryEdit")
        },
        // {
        //     path: "/reports/detail/:reportId",
        //     component: () => import("@/views/report/ReportDetail")
        // },
        {
            path: "/vacancies",
            component: () => import("@/views/employer/vacancy/VacanciesList")
        },
        {
            path: "/vacancies/create",
            component: () => import("@/views/employer/vacancy/VacanciesForm")
        },
        {
            path: "/vacancies/:vacancyId",
            component: () => import("@/views/employer/vacancy/VacanciesEdit")
        },
        {
            path: "*",
            component: () => import("@/views/SearchVacancy")
        }
    ]
});