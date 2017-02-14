<template>
  <div class="container">
    <div class="loading" v-if="loading">loading...</div>
    <div class="error" v-if="error">{{error}}</div>
    <div class="article" v-if="article">
      <div class="title">{{article.title}}</div>
      <div class="content" v-html="article.content">{{article.content}}</div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>

<style scoped>
  .article{padding:30px;color:#333;font-size:15px;}
</style>