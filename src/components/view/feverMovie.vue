<template>
 <div id="app" class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
   <spinner v-if="bool"></spinner>
   <div v-if="!bool">
     <h2>正在上映的电影</h2>
     <div class="fever-d">
       <div class="fever-d-img" v-for="item in msg" @click="serch(item.id)">
         <div class="fever-img">
           <img v-bind:src="item.images.medium" :alt="item.id">
         </div>
         <div class="fever-title">
           <h3 class="pull-left"><a>{{item.title}}</a></h3>
           <h5 class="pull-left">时间：{{item.mainland_pubdate}}</h5>
           <h5 class="pull-left">评分：{{item.rating.average}}分</h5>
           <star :score="item.rating.average" class="pull-left clear"></star>
           <h5 class="pull-left" v-if="item.directors[0].name">导演：{{item.directors[0].name}}</h5>
           <h5 class="pull-left" v-if="item.casts[0].name">主演：{{item.casts[0].name}}</h5>
         </div>
       </div>
     </div>
     <sp :show="show"></sp>
   </div>
 </div>
</template>

<script>
  import star from '../star/star'
  import spinner from '../spinner/spinner'
  import sp from '../spinner/sp'
  import InfiniteScroll from 'vue-infinite-scroll'
  export default {
    directives: {InfiniteScroll},
    data () {
      return {
        msg: '',
        bool: true,
        num: 10,
        busy: false,
        show: false,
        total: 30,
      }
    },
    components: {
      star: star,
      spinner: spinner,
      sp: sp
    },
    created: function () {
        this.loadMore()
    },
    methods: {
      serch: function (str) {
        const path = './movie/' + str
        this.$router.push({path: path})
      },
      loadMore () {
        var _this = this;
        this.busy = true;
        this.show = true;
        let url = "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count="+this.num;
        this.$http.jsonp(url)
          .then(function (res) {
            let start = res.data.subjects.length;
            this.bool = false;
            _this.msg = res.data.subjects;
            if (start < _this.total) {
              this.busy = false;
              _this.num += 10;
              _this.show = false;
            }
          })
          .catch(function (res) {
            console.log(res)
          })
      }
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
   }
  .fever-d-img {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2%;
    border-bottom: 1px solid #cccccc;
  }
  .fever-title {
    margin-left: 30px;
  }
  .fever-title a:hover {
    text-decoration: none;
    background-color: deepskyblue;
  }
  .fever-title h5 {
    clear: both;
  }
</style>
