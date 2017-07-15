<template>
<div id="app">
  <!--<ul>-->
    <!--<li v-for="item in msg" >-->
      <!--{{item.title}}-->
      <!--<img v-bind:src="item.images.large" alt="图片">-->
    <!--</li>-->
  <!--</ul>-->
</div>
</template>
<script>
  export default {
    data(){
      return {
        msg: '',
      }
    },
    created: function () {
      var _this = this;
      let url = "/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=4";
      this.$http.get(url).then(res => {
        console.log(res.data);
        _this.msg = res.data.subjects;
      }, res => {
        console.log(res)
      })
    }
  }
</script>

<style>

</style>
