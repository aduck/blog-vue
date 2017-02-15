<template>
  <div class="items">
    <div class="loading" v-if="loading">loading</div>
    <div class="error" v-if="error">{{error}}</div>
    <List v-for="item in views" :item="item"> 
  </div>
</template>

<script>
  import List from './List'
  export default {
    components:{List},
    data(){
      return {
        loading:false,
        error:null,
        views:null
      }
    },
    created(){
      this.getArticles()
    },
    methods:{
      getArticles(){
        this.$http.get('/api/journals')
          .then(function(res){
            this.loading=false
            this.views=res.body.data
          })
          .catch(function(e){
            this.loading=false
            this.error=e.toString()
          })
      }
    }
  }
</script>
