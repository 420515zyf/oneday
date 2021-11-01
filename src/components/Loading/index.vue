<template>
  <div class="boss">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="css"  scoped>
.boss {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading {
  margin: 100px auto;
  width: 100px;
  height: 100px;
  border: 10px solid #333333;
  border-bottom: #aaa 10px solid;
  border-radius: 50%;
  animation: load 1.1s infinite linear;
  -webkit-animation: load 1.1s infinite linear;
  -moz-animation: load 1.1s infinite linear;
  -o-animation: load 1.1s infinite linear;
}
@keyframes load {
  from {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}
@-webkit-keyframes load {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes load {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-o-keyframes load {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}
</style>