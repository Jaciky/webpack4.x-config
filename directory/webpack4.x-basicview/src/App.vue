<template>
  <div id="my-app">
    {{msg}}
    <Home/>
  </div>
</template>

<script>
  import Home from './views/Home.vue'

  export default {
    components: {
      Home
    },
    data() {
      return {
        msg: 'hello'
      }
    },
  }
</script>

<style scoped>
  #my-app {
    background-color: aqua;
  }
</style>