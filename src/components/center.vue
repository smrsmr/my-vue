<template>
<div id="app" class="container">
  <spinner v-if="bool"></spinner>
  <div v-if="!bool">
    <div class="center-head pull-left">
      <span>正在热映</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><router-link to="feverMovie">全部正在热映>></router-link> </span>&nbsp;&nbsp;&nbsp;&nbsp;<span><router-link to="/coming"> 即将上映>></router-link></span>
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
          <div class="swiper-button-prev swiper-button-white hidden-xs" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white hidden-xs" slot="button-next"></div>
        </swiper>
        <div class="center-large">
          <div class="center-large-ul">
            <ul>
              <li v-for="item in msg" @click="serch(item.id)">
                <a  class="center-large-ul-a"><img v-bind:src="item.images.medium" :alt="item.alt"></a>
                <p class="center-large-sp">{{item.title}}</p>
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
          slidesPerView: 4,
          spaceBetween: 40,
          loop: true,
          autoplay: 3000,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          mousewheelControl: true,    /*鼠标控制*/
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            667: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          }
        },
        bool: true
      }
    },
    created: function () {
      this.swiper();
    },
    methods: {
      serch: function (str) {
        const path = '/movie/' + str
        this.$router.push({path: path})
      },
      swiper: function () {
        var _this = this;
        let url = "https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=9";
        this.$http.jsonp(url)
          .then(function (res) {
            this.bool = false;
            _this.msg = res.data.subjects
          })
          .catch(function (res) {
            console.log(res)
          })
      }
    },
    activated: function () {
      this.swiper()
    }

  }
</script>

<style scoped>
  #app {
    margin-top: 2%;
  }
  .swiper-button-prev:hover {
    background-color: rgba(0,0,0,.5);
  }
  .swiper-button-next:hover {
    background-color: rgba(0,0,0,.5);
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
    width: 280px;
    height: 425px;
  }
  .center-large-ul ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
  }
  .center-large-sp {
    flex-flow: wrap;
    align-items: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    width: 100px;
  }
  .center-large-ul-a img {
    width: 100px;
    height: 142px;
  }
  @media (max-width: 667px) {
    .center-img-a img {
      width: 350px;
    }
  }
</style>
