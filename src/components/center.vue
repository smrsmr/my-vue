<template>
<div id="app" class="container">
  <spinner v-if="bool"></spinner>
  <div v-if="!bool">
    <div class="center-head pull-left">
      <span>正在热映</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><router-link to="fever-movie">全部正在热映>></router-link> </span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#">即将上映>></a> </span>
    </div>
    <div class="center-img">
      <div>
        <swiper :options="swiperOption" >
          <!-- 这部分放你要渲染的那些内容 -->
          <swiper-slide v-for="item in msg" >
            <a  class="center-img-a" @click="serch(item.id)"><img v-bind:src="item.images.large" :alt="item.alt"></a>
          </swiper-slide>
          <!-- 这是轮播的小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="center-large">
          <div class="center-large-ul">
            <ul>
              <li v-for="item in msg" @click="serch(item.id)">
                <a  class="center-large-ul-a"><img v-bind:src="item.images.medium" :alt="item.alt"></a>
                <span class="center-large-sp">{{item.title}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import spinner from './spinner/spinner'
  export default {
    components: {
      swiper,
      swiperSlide,
      spinner: spinner
    },
    data(){
      return {
        msg: '',
        swiperOption: {
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          slidesPerView: 3,
          spaceBetween: 0,
          loop: true,
          autoplay: 5000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        },
        bool: true
      }
    },
    created: function () {
      var _this = this
      let url = "/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=9";
      this.$http.get(url).then(res => {
        console.log(res)
        this.bool = false
        _this.msg = res.data.subjects
      }, res => {
        console.log(res)
      })
    },
    methods: {
      serch: function (str) {
        const path = '/movie/' + str
        this.$router.push({path: path})
      }
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
  .center-img {
    padding-top: 7%;
  }
  .center-large {
    margin-top: 2%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .center-large-ul {
    cursor: pointer;
    flex: 1;
  }
  .center-img-a {
    cursor: pointer;
  }
  .center-img-a img {
    width: 300px;
    height: 425px;
  }
  .center-large-ul ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
  }
  .center-large-ul ul li {
    position: relative;
  }
  .center-large-sp {
    position: absolute;
    left: 0;
  }
  .center-large-ul-a img {
    width: 100px;
    height: 142px;
  }
</style>
