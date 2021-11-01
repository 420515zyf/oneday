<template>
  <Loadings v-if="isLoading"></Loadings>
  <div v-else class="oo">
    <Scroller ref="resocl">
      <div class="city1">
        <div class="hot">
          <h4>热门城市</h4>
          <ul>
            <li
              @click="cityBtn(item.nm, item.id)"
              v-for="item in cityisHot"
              :key="item.id"
            >
              {{ item.nm }}
            </li>
          </ul>
        </div>
        <div class="cityList" id="cityList">
          <ul v-for="item in cityList" :key="item.index">
            <h3>{{ item.index }}</h3>
            <li v-for="list in item.list" :key="list.id">{{ list.nm }}</li>
          </ul>
        </div>
      </div>
    </Scroller>
    <div class="daohang">
      <ul>
        <li
          @click.prevent="dianji(index)"
          v-for="(item, index) in cityList"
          :key="item.id"
          :class="num == index ? 'color' : ''"
        >
          {{ item.index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cilist",
  data() {
    return {
      cityList: [],
      cityisHot: [],
      num: "",
      number: 0,
      isLoading: true,
    };
  },
  created() {
    this.dataCityList();
  },
  methods: {
    //cityList和cityisHot的数据初始化
    dataCityList() {
      this.$axios.get("/api/city/cityList").then((data) => {
        if (data.data.status == 200) {
          //cityList数据局初始化------------------
          var citys = data.data.data;
          for (var i = 0; i < citys.length; i++) {
            var zifu = citys[i].miaoshu.slice(0, 1).toUpperCase();
            if (this.quchong(zifu)) {
              //如果没有重复则进行新添加
              this.cityList.push({
                index: zifu,
                list: [
                  {
                    nm: citys[i].nm,
                    id: citys[i].id,
                    miaoshu: citys[i].miaoshu,
                    isHot: citys[i].isHot,
                  },
                ],
              });
            } else {
              //有重复则进行累计添加
              for (var j = 0; j < this.cityList.length; j++) {
                if (this.cityList[j].index == zifu) {
                  this.cityList[j].list.push({
                    nm: citys[i].nm,
                    id: citys[i].id,
                    miaoshu: citys[i].miaoshu,
                    isHot: citys[i].isHot,
                  });
                }
              }
            }
          }
        }
        this.cityList.sort((n1, n2) => {
          if (n1.index > n2.index) {
            return 1;
          } else if (n1.index < n2.index) {
            return -1;
          } else if (n1.index == n2.index) {
            return 0;
          }
        });
        //------------------------------------

        //cityisHot数据初始化------------------
        for (var k = 0; k < citys.length; k++) {
          if (citys[k].isHot == 1) {
            this.cityisHot.push(citys[k]);
          }
        }
        //------------------------------------
        this.isLoading = false;
      });
    },
    //判断数组中的字符是否相同
    quchong(zifu) {
      for (var i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].index == zifu) {
          return false;
        }
      }
      return true;
    },
    //点击事件
    dianji(num) {
      this.num = num;
      var uu = document.getElementById("cityList");
      var ul = uu.getElementsByTagName("ul")[num];
      var number = -parseInt(ul.offsetTop);
      this.$refs.resocl.toScrollTop(number);
    },
    //城市点击事件
    cityBtn(nm, id) {
      var obj = { nm, id };
      this.$store.commit("city/upCityNmId", obj);
      this.$router.push({ name: "comingSoon", params: { id: id } });
    },
  },
};
</script>

<style lang="less" scoped>
.oo {
  position: absolute;
  top: 30px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.color {
  color: red;
}
h4,
h3 {
  text-indent: 12px;
  background-color: #eff0f0;
  font-weight: normal;
}

.city1 {
  width: 100%;
  padding-right: 20px;
  background-color: #fff3f1;
  .hot {
    width: 100%;
    overflow: hidden;
    h4 {
      margin-bottom: 10px;
    }
    ul {
      width: 100%;
      li {
        height: 30px;
        line-height: 30px;
        background-color: white;
        width: 25%;
        float: left;
        margin-left: 18px;
        margin-bottom: 20px;
        text-align: center;
        font-size: 14px;
      }
    }
  }

  .cityList {
    width: 100%;
    display: block;
    ul {
      width: 100%;
      padding-bottom: 10px;
      h3 {
        margin-bottom: 10px;
      }
      li {
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        text-indent: 8px;
        border: none;
      }
    }
  }
}
.daohang {
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background-color: white;
  width: 20px;
  ul {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      text-align: center;
      height: 20px;
      line-height: 20px;
      width: 100%;
    }
  }
}
</style>