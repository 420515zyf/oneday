//引入communications数据文件
import communication from "./communication";

//引入cityList数据文件
import cityList from "./cityList";

//引入cityNowPlay数据文件
import cityNowplay from "./cityNowplay";

//创建接口模拟服务user.js---------------------
import Mock from 'mockjs';

//获取登录
Mock.mock(/\/api\/user\/login/, "get", {
    status: 200,
    message: "success",
    data: {
        id: "@string(10)",  //随机字符串id
        name: "@cname()" //中文名称
    }
});
//获取用户列表数据
Mock.mock(/\/api\/user\/userList/, "get", {
    status: 200,
    message: "success",
    "data|5-10": [
        //data|n-m 随机生成 多少个
        {
            "id|+1": 1,  //模拟自增+1
            name: "@cname()",  //中文名称
            introduce: "@cword(10,20)",  //中文字
            img: "@dataImage(64x64)" //图片
        }
    ]
});
//请求数据
Mock.mock(/\/api\/user\/userInfo/, "get", communication);

//城市请求数据
Mock.mock(/\/api\/city\/cityList/, "get", cityList);

//正在热映请求数据-----------------------
Mock.mock(/\/api\/city\/comingSoon\/1/, "get", {
    data: [
        { name: "北京市", id: 1 },
    ]
});
Mock.mock(/\/api\/city\/comingSoon\/2/, "get", {
    status: 200,
    message: "success",
    data: [
        { name: "天津市", id: 2 },
    ]
});
Mock.mock(/\/api\/city\/comingSoon\/3/, "get", {
    data: [
        { name: "沈阳市", id: 3 }
    ]
});

//--------------------------------------

//城市切换
Mock.mock(/\/api\/city\/citySwith/, "get", {
    status: 200,
    message: "success",
    data: {
        nm: "大连市",
        id: "75"
    }
})

//即将上映
Mock.mock(/\/api\/city\/cityNowplay/, "get", cityNowplay);