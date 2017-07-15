<template>
<div id="app" class="container">
  <div class="center-head pull-left">
    <span>正在热映</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#">全部正在热映>></a> </span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#">即将上映>></a> </span>
  </div>
  <div class="center-img">
    <ul>
      <li v-for="item in msg" >
        <!--<img v-bind:src="item.images.medium" alt="图片">-->
        <!--{{item.title}}-->
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  export default {
    data(){
      return {
        msg: ''
      }
    },
    created: function () {
      var _this = this
      let url = "/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=4";
      this.$http.get(url).then(res => {
        console.log(res.data)
        _this.msg = res.data.subjects
      }, res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  #app {
    margin-top: 2%;
  }
  .center-head span a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
  .center-head span:first-of-type {
    font-size: 16px;
  }
</style>
