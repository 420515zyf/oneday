<template>
  <div class="boss">
    <div class="header">
      <div class="fanhui" v-if="isFanHui" @click="fanhui">
        <span>返回</span>
      </div>
      <Header :title="title"></Header>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer"><Tabartab @chang="changess"></Tabartab></div>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Tabartab from "./components/Tabar/index.vue";
export default {
  name: "App",
  data() {
    return {
      title: "喵喵电影",
      isFanHui: false,
    };
  },
  methods: {
    changess(obj) {
      this.title = obj;
    },
    fanhui() {
      this.$router.go(-1);
    },
  },
  components: {
    Header,
    Tabartab,
  },
  watch: {
    "$route.path"(newVal, oldVal) {
      if (newVal == "/movie/detail/%5Bobject%20Object%5D") {
        this.isFanHui = true;
      } else {
        this.isFanHui = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
body,
html {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  height: 100%;
}

.boss {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: khaki;
}

.header {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  position: absolute;
  top: 65px;
  bottom: 65px;
  width: 100%;
  border: 1px solid blue;
}
.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
  border-top: 1px solid black;
}
.fanhui {
  position: absolute;
  left: 5%;
  span {
    color: white;
  }
}
</style>
<style lang="less">
.color {
  color: red;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
</style>