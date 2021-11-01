<template>
  <div class="ComingSoon">
    <Loadings v-if="isloading"></Loadings>
    <div v-else>
      <h2>---ComingSoon正在热映---</h2>
      <h3>
        <span>城市名：{{ this.$store.state.city.nm }}</span
        ><br />
        <span>id：{{ this.$store.state.city.id }}</span>
      </h3>
      <div class="wanwan">
        <div @click="idBtn($store.state.city.id)">城市名详情页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      isloading: true,
      prevCityId: -1,
    };
  },
  //activated  该生命周期起到页面切换刷新作用
  activated() {
    this.qingqiu();
  },
  methods: {
    qingqiu() {
      var cityid = this.$route.params.id;
      if (this.prevCityId == cityid) {
        return;
      }
      this.isloading = true;
      if (this.$route.params.id > 3) {
        this.$route.params.id = 1;
      } else if (this.$store.state.city.id > 3) {
        this.$store.state.city.id;
      }
      var ids = this.$route.params.id || this.$store.state.city.id;
      this.$axios.get("/api/city/comingSoon/" + ids).then((data) => {
        this.prevCityId = cityid;
        this.isloading = false;
      });
    },
    idBtn(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
  },
};
</script>

<style lang="less">
.ComingSoon {
  position: absolute;
  top: 30px;
  bottom: 0px;
  width: 100%;
  .wanwan {
    width: 100%;
    height: 200px;
    background-color: tomato;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    div {
      width: 200px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      &:nth-of-type(1) {
        background-color: turquoise;
      }
      &:nth-of-type(2) {
        background-color: yellow;
      }
    }
  }
}
</style>