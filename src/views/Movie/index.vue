<template>
  <div>
    <div class="xuanze">
      <ul>
        <li><router-link to="/movie/city">大连</router-link></li>
        <li><router-link to="/movie/comingsoon">正在热映</router-link></li>
        <li><router-link to="/movie/nowplaying">即将上映</router-link></li>
        <li>
          <router-link to="/movie/search"
            ><i class="el-icon-search"></i
          ></router-link>
        </li>
      </ul>
    </div>
    <h3>Movie子组件视图模块</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Movie",
};
</script>

<style lang="less" scoped>
.xuanze {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  margin-top: -16px;
  height: 30px;
  width: 100%;
  background-color: royalblue;
  ul {
    height: 30px;
    display: block;
    margin-left: -40px;
    width: 100%;
    li {
      height: 30px;
      line-height: 30px;
      display: block;
      font-size: 14px;
      text-align: center;
      height: 100%;
      background-color: white;
      float: left;
      width: 25%;
      list-style: none;
      a {
        color: black;
      }
      &:nth-of-type(4) a {
        color: red;
      }
      &.router-link-active {
        color: red;
      }
    }
  }
}
</style>