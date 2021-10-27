<template>
  <div class="boss">
    <div class="header"><Header :title="title"></Header></div>
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
    };
  },
  methods: {
    changess(obj) {
      this.title = obj;
    },
  },
  components: {
    Header,
    Tabartab,
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