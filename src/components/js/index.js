import Vue from "vue";
import MessageBox from "./MessageBox/index.vue";

export var messageBox = (function () {
    var defaults = { //默认值：
        title: '',  //标题
        content: '',    //内容  城市名
        cancel: '',     //取消
        ok: '',     //确认 | 切换城市
        handleCancel: null, //取消事件 
        handleOk: null  //确认事件 | 切换城市事件
    };
    return function (opts) {   //配置参数
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }
        var MyComponent = Vue.extend(MessageBox);
        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    //当handleCancel()方法存在不为null时，改变其this指向 令其指向调用者 
                    if (defaults.handleCancel != null) {
                        defaults.handleCancel.call(this);
                        //当触发该事件后删除 创建插入的 该组件和其父级div
                        document.body.removeChild(vm.$el);
                    }
                },
                handleOk() {
                    //当handleOk()方法存在不为null时，改变其this指向 令其指向调用者
                    if (defaults.handleOk != null) {
                        defaults.handleOk.call(this);
                        //当触发该事件后删除 创建插入的 该组件和其父级div
                        document.body.removeChild(vm.$el);
                    }
                }
            }
        });

        //将 该 组件的父级外层div 添加到body中
        document.body.appendChild(vm.$el);
    }
})();
