<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadJScript();
  },
  methods: {
    async loadJScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://api.map.baidu.com/api?type=webgl&v=1.0&ak=jlmfRXL7keX8Gdg1KMQhAG9vCghuEDfb&callback=init";
      document.body.appendChild(script);
      setTimeout(() => {
        this.init();
      }, 500);
    },
    init() {
      var BMapGL = window.BMapGL;
      var map = new BMapGL.Map("container"); // 创建Map实例
      var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
      map.centerAndZoom(point, 10);
      map.enableScrollWheelZoom(); // 启用滚轮放大缩小
    },
  },
};
</script>

<style lang="less" scoped>
body,
html,
#allmap {
  #container {
    overflow: hidden;
    width: 100%;
    height: 300px;
    margin: 0;
    font-family: "微软雅黑";
  }
}
</style>