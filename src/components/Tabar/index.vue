<template>
  <div>
    <el-row>
      <el-col :span="8">
        <router-link
          @click.native="btn1"
          to="/movie"
          tag="div"
          class="grid-content bg-purple"
        >
          <div>
            <i class="fontFamily hhtxdianyingpiaoiocn"></i>
            <span>电影</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link
          @click.native="btn2"
          to="/cinema"
          tag="div"
          class="grid-content bg-purple-light"
        >
          <div>
            <i class="fontFamily hhtxyingyuan"></i>
            <span>影院</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link
          @click.native="btn3"
          to="/mine"
          tag="div"
          class="grid-content bg-purple"
        >
          <div>
            <i class="fontFamily hhtxwode"></i>
            <span>我的</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Tabar",
  methods: {
    btn1() {
      this.$emit("chang", "喵喵电影");
      console.log(1);
    },
    btn2() {
      this.$emit("chang", "喵喵影院");
      console.log(2);
    },
    btn3() {
      this.$emit("chang", "我的喵喵");
      console.log(3);
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    i {
      display: block;
      font-size: 20px;
    }
    span {
      display: block;
      font-size: 13px;
    }
  }
}
.bg-purple {
  text-align: center;
}
.bg-purple-light {
  text-align: center;
}
</style>
<style lang="less">
</style>