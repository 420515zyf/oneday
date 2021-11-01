<template>
  <div class="aa">
    <div class="xuanze">
      <ul>
        <li @click="citySwith">
          <router-link to="/movie/city">{{
            this.$store.state.city.nm
          }}</router-link>
        </li>
        <li>
          <router-link :to="'/movie/comingsoon/' + this.dataId"
            >正在热映</router-link
          >
        </li>
        <li><router-link to="/movie/nowplaying">即将上映</router-link></li>
        <li>
          <router-link to="/movie/search"
            ><i class="el-icon-search"></i
          ></router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
import { messageBox } from "../../components/js/index";
export default {
  name: "Movie",
  data() {
    return {
      dataId: this.$store.state.city.id || 1,
      cityNow: {},
    };
  },
  mounted() {
    this.citySwith();
  },
  methods: {
    citySwith() {
      setTimeout(() => {
        this.$axios.get("/api/city/citySwith").then((data) => {
          this.cityNow = data.data;
          if (this.cityNow.status == 200) {
            if (this.cityNow.data.id == this.$store.state.city.id) {
              return;
            }
            var that = this;
            messageBox({
              title: "定位",
              content: this.cityNow.data.nm,
              cancel: "取消",
              ok: "切换定位",
              handleCancel() {},
              handleOk() {
                window.localStorage.setItem("cityNM", that.cityNow.data.nm);
                window.localStorage.setItem("cityId", that.cityNow.data.id);
                window.location.reload();
              },
            });
            return;
          }
        });
      }, 1100);
    },
  },
};
</script>

<style lang="less" scoped>
.aa {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.xuanze {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 30px;
  width: 100%;
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