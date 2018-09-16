<template>
  <div class="child-item">
    {{msg}}
    <img src="../assets/images/picture.jpg">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'webpack'
      }
    }
  }
</script>

<style lang="less" scoped>
 .child-item {
   background-color: aquamarine;
 }
</style>
