<template>
  <div class="serach">
    <input type="text" placeholder="请输入搜索内容" v-model="msg" /><br />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    //这是一个取消axios多次请求的方法
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
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
          console.log(1111);
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
  bottom: 30px;
  width: 100%;
  height: 100%;
  background-color: brown;
}
</style>