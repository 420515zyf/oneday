<template>
  <div class="pinpai" id="allmap"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.loadJScript();
  },
  methods: {
    loadJScript() {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://api.map.baidu.com/api?type=webgl&v=1.0&ak=jlmfRXL7keX8Gdg1KMQhAG9vCghuEDfb&callback=init";
      script.onload = () => {
        setTimeout(() => {
          this.init();
        }, 1000);
      };
      document.body.appendChild(script);
    },
    init() {
      //120.207461, 30.253082
      var BMapGL = window.BMapGL;
      var map = new BMapGL.Map("allmap");
      var point = new BMapGL.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom(true);

      function myFun(result) {
        point.lng = result.center.lng;
        point.lat = result.center.lat;
        console.log("ppp");
        console.log(point);
        var cityName = result.name;
        map.setCenter(cityName);
        if (cityName != "") {
          map.centerAndZoom(cityName, 15);
        }
        console.log("当前定位城市:" + cityName);
      }

      var myCity = new BMapGL.LocalCity();
      myCity.get(myFun);
      var cen = map.getCenter(); // 获取地图中心点
      console.log("-------------------");
      console.log(cen);
      console.log(cen.lng.toFixed(5));

      var marker1 = new BMapGL.Marker(
        new BMapGL.Point(cen.lng.toFixed(5), cen.lat.toFixed(5))
      );
      map.addOverlay(marker1);
      var marker2 = new BMapGL.Marker(
        new BMapGL.Point(120.16169306299119, 30.28005872625885)
      );
      map.addOverlay(marker2);
    },
  },
};
</script>

<style lang="less" scoped>
.pinpai {
  width: 100%;
  height: 400px;
  background-color: aqua;
}
body,
html,
#allmap {
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>