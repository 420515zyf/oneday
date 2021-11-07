import Vue from 'vue';
import VueRouter from 'vue-router';
import cinemaRouter from './cinema';
import mineRouter from './mine';
import movieRouter from './movie/index';

Vue.use(VueRouter);

//创建vue-router实例
var router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/movie',
        },
        cinemaRouter,
        mineRouter,
        movieRouter
    ],
    linkActiveClass: 'color'
});

//设置路由导航守卫---------------------
// router.beforeEach((to, from, next) => {
//     if (to.path == "/user/login") {
//         next();
//     } else if (to.path == "user/register") {
//         next();
//     } else {
//         next({ name: "login" });
//     }
// });
//------------------------------------

export default router;