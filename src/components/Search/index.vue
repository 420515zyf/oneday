<template>
  <div class="serach">
    <input type="text" placeholder="请输入搜索内容" v-model="msg" /><br />
    <hr />
    <Loadings v-if="isLoading"></Loadings>
    <div v-else class="huadong">
      <h3>{{ zhungtai }}</h3>
      <Scroller
        @handelScrollNow="handelScrollNow"
        @handelScrollLeave="handelScrollLeave"
      >
        <ul>
          <li v-for="item in datalList" :key="item.id" @tap="paaasdas">
            {{ item.nm }}
          </li>
        </ul>
      </Scroller>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      msg: "",
      datalList: [],
      zhungtai: "",
      isLoading: true,
    };
  },
  created() {
    this.qingqiu();
  },
  methods: {
    //这是一个取消axios多次请求的方法
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    },
    qingqiu() {
      this.$axios.get("/api/city/cityList").then((data) => {
        if (data.data.status == 200) {
          this.datalList = data.data.data;
          this.isLoading = false;
        }
      });
    },
    //正在滚动时触发的事件
    handelScrollNow(zhi) {
      if (zhi.y < -30 || zhi.y > 30) {
        this.zhungtai = "正在继续加载中";
      }
    },

    //手指离开滚动区域时触发的事件;
    handelScrollLeave(zhi) {
      if (zhi.y < -30 || zhi.y > 30) {
        this.$axios.get("/api/city/cityList").then((data) => {
          if (data.data.status == 200) {
            this.zhungtai = "加载完成";
          }
        });
      }
    },
    paaasdas() {
      console.log("tap事件");
    },
  },
  watch: {
    // 监听msg变化，并加上防止多次请求
    msg(newVal, oldVal) {
      var that = this;
      this.cancelRequest();
      this.$axios
        .get("/api/city/cityList", {
          cancelToken: new this.$axios.CancelToken(function (c) {
            that.source = c;
          }),
        })
        .then((data) => {
          console.log(data.data.data);
        })
        .catch((err) => {
          if (this.$axios.isCancel(err)) {
            console.log("Request canceled", err.msg);
          } else {
            console.log(err);
          }
        });
    },
  },
};
</script>

<style lang="less">
.serach {
  position: absolute;
  top: 30px;
  bottom: 0px;
  width: 100%;
  background-color: brown;
  overflow: hidden;
  .huadong {
    position: absolute;
    top: 30px;
    bottom: 0px;
    width: 100%;
    background-color: yellow;
    h3 {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
}
</style>