import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//创建vue-router实例
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/user' },
    ]
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