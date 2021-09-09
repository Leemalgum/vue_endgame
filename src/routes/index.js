import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', //url에서 #이 사라짐
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage.vue'), //코드 스플리팅
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
        {
            path: '*', //라우팅 되지 않은 모든 페이지에 대한 설정, 콜백라우터
            component: () => import('@/views/NotFoundPage.vue'),
        },
    ],
});
