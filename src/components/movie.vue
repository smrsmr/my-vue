<template>
  <div class="container" id="app">
    <h2 class="pull-left">{{search_result.title}}(<span>{{search_result.year}}</span>)</h2>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        guodu: '',
        search_result: ''
      }
    },
    created: function () {
      this.val = this.$route.query.name;
      var _this = this;
      let url = "/api/subject/"+this.$route.params.id +'?apikey=0b2bdeda43b5688921839c8ecb20399b&city="广州"';
      this.$http.get(url).then(res => {
        console.log(res.data);
        _this.guodu = false
        _this.search_result = res.data
      }, res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  #app h2 {
    font-weight: 600;
  }
  #app h2 span {
    color: #c0c0c0;
  }
</style>
