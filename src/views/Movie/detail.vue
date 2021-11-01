<template>
  <div class="xiangqin">
    <h1>详情页</h1>
    <div class="min">
      <button @click="btn">按钮</button>
      <h3>城市名称：{{ listDetail.nm }}</h3>
      <h3>城市id：{{ listDetail.id }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      // id: this.$route.query.id,
      id: this.$route.params.id,
      listDetail: {},
    };
  },
  mounted() {
    this.qingqiu();
  },
  methods: {
    btn() {
      console.log(this.id);
    },
    qingqiu() {
      console.log(this.id);
      this.$axios.get("/api/city/cityList").then((data) => {
        if (data.data.status == 200) {
          var list = data.data.data;
          list.some((item, i) => {
            if (item.id == this.id) {
              this.listDetail = item;
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.xiangqin {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: aqua;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  h1 {
    text-align: center;
  }
  & > h1 {
    background-color: violet;
    height: 30%;
  }
  .min {
    background-color: tomato;
    width: 100%;
    height: 70%;
  }
}
</style>