<template>
  <div>
    <el-container>
      <el-header><Header :title="title"></Header></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><Tabartab @chang="changess"></Tabartab></el-footer>
    </el-container>
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
.el-header {
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-footer {
  border-top: 1px solid black;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px 0px 10px 0px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
<style lang="less">
.color {
  color: red;
}
</style>