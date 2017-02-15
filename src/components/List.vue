<template>
  <div class="item">
    <router-link :to="`/list/${item._id}`">
      <div class="thumb"><img :src="item.thumb" :alt="item.title"></div>
      <div class="title">{{item.title}}</div>
      <div class="tags clearfix">
        <span v-for="tag in item.tags">{{tag}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:['item']
  }
</script>

<style lang="scss" scoped>
  @import '../scss/_base.scss';
  .item{
    background:#fff;
    padding:(20rem/$baseSize);
    margin-bottom:(20rem/$baseSize);
  }
  .title{
    margin-top:(10rem/$baseSize);
    line-height:(30rem/$baseSize);
    height:(30rem/$baseSize);
    overflow:hidden;
    color:#333;
    word-wrap:break-word;
  }
  .tags{
    margin-top:(10rem/$baseSize);
    span{
      float:left;
      height:(35rem/$baseSize);
      line-height:(35rem/$baseSize);
      padding:0 (10rem/$baseSize);
      margin-right:(10rem/$baseSize);
      background:rgba(255,0,0,.3);
      color:#fff;
      border-radius:(5rem/$baseSize);
    }
  }

  @include dprsize('.title',13px);
</style>