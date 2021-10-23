//判断是否是开发环境或者preview是true,再根据条件引入mockjs包
if (process.env.NODE_ENV !== 'production' || process.env.VUE_APP_PREVIEW === 'true') {
    //使用同步加载依赖
    const Mock = require('mockjs');
    require('./services/user');
    Mock.setup({
        headers: {
            "ContentType": "application/json" || "multipart/form-data"
        },
        timeout: 1000 //请求延时时间
    })
}