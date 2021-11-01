<template>
  <div class="cinema">
    <div class="ulLi">
      <ul>
        <li><router-link to="/cinema/cilist">全城</router-link></li>
        <li><router-link to="/cinema/pinpai">品牌</router-link></li>
        <li><router-link to="">特色</router-link></li>
      </ul>
    </div>
    <h3>Cinema子组件视图模块</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cinema",
};
</script>

<style lang="less" scoped>
.cinema {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  .ulLi {
    background-color: blue;
    height: 30px;
    line-height: 30px;
    ul {
      width: 100%;
      text-align: center;
      li {
        float: left;
        list-style: none;
        width: 33%;
        a {
          color: red;
        }
      }
    }
  }
}
</style>