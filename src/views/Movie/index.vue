<template>
  <div class="aa">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Movie",
};
</script>

<style lang="less" scoped>
.aa {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: blue;
  overflow: hidden;
}
.xuanze {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 30px;
  width: 100%;
  background-color: royalblue;
  ul {
    height: 30px;
    display: block;
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