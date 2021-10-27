<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  name: "Scroller",
  data() {
    return {
      scrolls: {},
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.scrollOptions();
    }, 2000);
  },
  methods: {
    scrollOptions() {
      var scroll = new BScroll(this.$refs.wrapper, {
        bounce: true,
        click: true,
        disableMouse: false,
        disableTouch: false,
        tap: "tap",
        mouseWheel: true,
        probeType: 1,
      });

      this.scrolls = scroll;
      //正在滚动时触发的事件
      scroll.on("scroll", (zhi) => {
        console.log("1 - 1");
        this.$emit("handelScrollNow", zhi);
      });
      // 手指离开滚动区域时触发的事件;
      scroll.on("touchEnd", (haha) => {
        console.log("2 - 1");
        this.$emit("handelScrollLeave", haha);
      });
    },
    //点击跳转事件
    toScrollTop(y) {
      this.scrolls.scrollTo(0, y);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  ul {
    width: 100%;
    display: block;
    li {
      display: block;
      width: 100%;
      border: 1px solid darkmagenta;
      height: 50px;
      line-height: 50px;
      margin: 5px 0px;
      text-indent: 10px;
    }
  }
}
</style>
