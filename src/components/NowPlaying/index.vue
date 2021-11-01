<template>
  <div class="NowPlaying">
    <h2>---NowPlaying即将上映---</h2>
    <Loadings v-if="isloading"></Loadings>
    <div v-else class="div1">
      <Scroller>
        <div class="div2">
          <ul @click="btn(item.id)" v-for="item in newplayList" :key="item.id">
            <li>影片名：{{ item.name }}</li>
            <li>影片id：{{ item.id }}</li>
            <li>豆瓣评分：{{ item.playIsHot }}.v</li>
          </ul>
        </div>
      </Scroller>
    </div>
  </div>
</template>

<script>
export default {
  name: "NowPlaying",
  data() {
    return {
      newplayList: [],
      isloading: true,
    };
  },
  activated() {
    this.qingqiu();
  },
  mounted() {},
  methods: {
    qingqiu() {
      this.$axios.get("/api/city/cityNowplay").then((data) => {
        if (data.data.status == 200) {
          this.newplayList = data.data.data;
          this.isloading = false;
        }
      });
    },
    //点击跳转到详情页事件
    btn(id) {
      var obj = {
        cityPlayId: id,
      };
      this.$store.commit("city/upCityNewPlayId", obj);
      this.$router.push({ name: "nowplayingDetail", params: { id } });
    },
  },
};
</script>

<style lang="less" scoped>
.NowPlaying {
  position: absolute;
  left: 0px;
  top: 30px;
  bottom: 0px;
  width: 100%;
  background-color: aqua;
  .div1 {
    position: absolute;
    top: 32px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
  }
  .div2 {
    ul {
      background-color: white;
      margin: 5px 0px;
      padding: 5px 0px;
    }
    li {
      margin: 0px;
      border: none;
      padding: 0px;
      height: 20px;
      line-height: 20px;
      width: 100%;
    }
  }
}
</style>