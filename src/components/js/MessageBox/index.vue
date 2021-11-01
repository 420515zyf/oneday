<template>
  <div class="tan">
    <h3>{{ title }}</h3>
    <div class="div1">{{ content }}</div>
    <div class="div2">
      <div class="left" @click="handleCancel">{{ cancel }}</div>
      <div class="rigtht" @click="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tan {
  z-index: 100;
  width: 200px;
  height: 130px;
  border: 2px solid #ccc;
  border-radius: 5%;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 3px 3px 1px 0px #ccc;
  background-color: white;
  h3 {
    margin-top: 10px;
  }
  .div1 {
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .div2 {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 30px;
    border-top: 1px solid #ccc;
    div {
      text-align: center;
      position: absolute;
      width: 50%;
      height: 30px;
      line-height: 30px;
      top: 0px;
    }
    .left {
      border-right: 1px solid #ccc;
      left: 0px;
    }
    .rigtht {
      right: 0px;
    }
  }
}
</style>