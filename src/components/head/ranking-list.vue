<template>
  <div id="app" class="container">
    <h2 class="pull-left">豆瓣电影排行榜</h2>
    <div class="fever-d">
      <div class="fever-d-img" v-for="item in msg">
        <div class="fever-img">
          <img v-bind:src="item.images.medium" alt="图片">
        </div>
        <div class="fever-title">
          <h3 class="pull-left"><a v-bind:href="item.alt" >{{item.title}}</a> </h3>
          <h5 class="pull-left">时间（地区）：{{item.pubdates[0]}}</h5>
          <h5 class="pull-left">评分：{{item.rating.average}}分</h5>
          <star :score="item.rating.average" class="pull-left clear"></star>
          <h5 class="pull-left">导演：{{item.directors[0].name}}</h5>
          <h5 class="pull-left">主演：{{item.casts[0].name}} / {{item.casts[1].name}} / {{item.casts[2].name}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star'
  export default {
    data () {
      return {
        msg: '',
      }
    },
    components: {
      star: star
    },
    created: function () {
      var _this = this
      let url = "/api/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=12";
      this.$http.get(url).then(res => {
        console.log(res.data)
        _this.msg = res.data.subjects
      }, res => {
        console.log(res)
      })
    }
  }
</script>

<style>
  body {
    background-color: #f8f8f8;
  }
  .fever-d {
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 0;
    margin-top: 60px;
  }
  .fever-d-img {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2%;
    padding-top: 10px;
    border-bottom: 1px dashed #cccccc;
  }
  .fever-d-img:nth-child(1) {
    border-top: 1px dashed #cccccc;
  }
  .fever-title {
    margin-left: 4%;
  }
  .fever-title h5 {
    clear: both;
  }
  .fever-title a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
</style>

