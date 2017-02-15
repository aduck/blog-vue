<template>
  <div id="navBar" class="clearfix">
    <a class="back" href="javascript:history.go(-1)">
      <i class="fa fa-angle-left"></i>
    </a>
    <router-link to="/" class="home">
      <i class="fa fa-home"></i>
    </router-link>
    我在这里
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
  @import '../scss/_base.scss';
  #navBar{
    background:#333;
    color:#fff;
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index:99;
    text-align:center;
    height:(90rem/$baseSize);
    line-height:(90rem/$baseSize);
  }
  @include dprsize('#navBar',14px);
  .back,.home{
    float:left;
    width:(90rem/$baseSize);
  }
  .back i,.home i{
    vertical-align:middle;
  }
  @include dprsize('.back i,.home i',14px);
  .home{
    float:right;
  }
</style>