<template>
  <div>
    <h1>Mine子组件视图模块</h1>
    <Login></Login>
  </div>
</template>

<script>
import Login from "../../components/Login/index.vue";
export default {
  name: "Mine",
  components: {
    Login,
  },
};
</script>

<style lang="less" scoped>
</style>