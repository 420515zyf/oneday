//引入视图组件模块文件和vuex属性文件-----------------
import App from './App.vue';

//引入路由文件
import router from './routers';

//引入vuex文件
import store from './stores';

//引入iconfont字体图标样式
import './assets/iconfont/iconfont.css';

//------------------------------------------------

//引入框架和插件包区--------------------------------
//引入vue框架包
import Vue from 'vue';

//引入axios文件
import axios from './axios';
//将axios挂在到vue原型链上
Vue.prototype.$axios = axios;

//引入element-ui插件包
import ElementUI from 'element-ui';
//引入element-ui的css样式
import 'element-ui/lib/theme-chalk/index.css';
//将element-ui挂载到vue上
Vue.use(ElementUI);

//引入mockjs后台模拟器
import './mock';

//注册一个适用于滑动的全局组件
import scroller from './components/Scroller/index.vue';
Vue.component('Scroller', scroller);

//注册一个loading全局组件
import loading from './components/Loading/index.vue';
Vue.component('Loadings', loading);

//------------------------------------------------

//设置为开发环境
Vue.config.productionTip = false;

//创建Vue实例
var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router,
    store
});
