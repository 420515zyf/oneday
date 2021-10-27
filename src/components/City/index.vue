<template>
  <div class="city">
    <citylist></citylist>
  </div>
</template>

<script>
import citylist from "../Cilist/index.vue";
export default {
  name: "City",
  components: {
    citylist,
  },
};
</script>

<style lang="less">
.city {
  position: absolute;
  top: 30px;
  bottom: 0px;
  height: 100%;
  width: 100%;
}
</style>