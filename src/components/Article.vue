<template>
  <div class="container">
    <div class="loading" v-if="loading">loading...</div>
    <div class="error" v-if="error">{{error}}</div>
    <div class="article" v-if="article">
      <div class="title">{{article.title}}</div>
      <div class="info">
        <i class="fa fa-clock-o"></i> {{dateFormated}}
      </div>
      <div class="content markdown" v-html="article.content">{{article.content}}</div>
    </div>
  </div>
</template>

<script>
  import date from '../js/date'
  export default {
    data(){
      return {
        error:null,
        loading:false,
        article:null
      }
    },
    created(){
      this.getArticle(this.$route.params.id)
    },
    methods:{
      getArticle(id){
        this.$http.get(`/api/journal?id=${id}`)
          .then(function(res){
            this.loading=false
            this.article=res.body.data.journal
          })
          .catch(function(err){
            this.loading=false
            this.error=err.toString()
          })
      }
    },
    computed:{
      dateFormated(){
        var self=this
        return date(self.article.meta.createAt)
      }
    },
    watch:{
      '$route'(to,from){
        this.getArticle(to.params.id)
      }
    }
  }
</script>

<style lang="scss">
  @import '../scss/_base.scss';
  @import '../scss/md.scss';
  .container{background:#fff;}
  .article{
    padding:(10rem/$baseSize);
    background:#fff;
    .info{
      text-align:center;
      color:#999;
    }
    .title{
      padding:(16rem/$baseSize) 0 (10rem/$baseSize);
      text-align:center;
    }
    .content{
      margin-top:(20rem/$baseSize);
    }
  }
  
  @include dprsize('.article .title',18px);
</style>