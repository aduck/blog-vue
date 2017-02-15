<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    components:{NavBar}
  }
</script>

<style lang="scss" scoped>
  @import 'scss/_base.scss';
  #app{
    width:10rem;
    margin:(90rem/$baseSize) auto 0;
  }
</style>