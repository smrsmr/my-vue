<template>
<div id="app" class="container">
  <div class="center-head pull-left">
    <span>正在热映</span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#">全部正在热映>></a> </span>&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="#">即将上映>></a> </span>
  </div>
  <div class="center-img">
    <div>
      <swiper :options="swiperOption"  ref="mySwiper" >
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="item in msg">
          <a v-bind:href="item.alt"><img v-bind:src="item.images.large" alt="图片"></a>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="center-large">
        <div class="center-large-ul">
          <ul>
            <li v-for="item in msg">
              <a v-bind:href="item.alt"><img v-bind:src="item.images.medium" alt="图片"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return {
        msg: '',
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          autoplay: 1000,
          slidesPerView: 'auto',
          centeredSlides: true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
//          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    created: function () {
      var _this = this
      let url = "/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city='广州'&count=8";
      this.$http.get(url).then(res => {
        console.log(res.data)
        _this.msg = res.data.subjects
      }, res => {
        console.log(res)
      })
    },
    //定义这个sweiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
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
    padding-top: 6%;
  }
  .center-large {
    margin-top: 2%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }
  .center-large-ul {
    flex: 1;
  }
  .center-large-ul ul {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
  }
</style>
