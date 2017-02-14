<template>
  <div class="item">
    <router-link :to="`/list/${item._id}`">
      <div class="thumb"><img :src="item.thumb" alt=""></div>
      <div class="title">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props:['item']
  }
</script>

<style scoped>
  .item a{color:#999;text-decoration:none;font-size:16px;}
  .item a:hover{color:#2bbdd5;}
</style>