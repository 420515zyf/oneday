<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">{{ title }}</div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"],
};
</script>

<style lang="less" scoped>
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 0px;
  min-height: 36px;
}
</style>