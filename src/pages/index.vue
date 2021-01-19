<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 菜單 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手機 電話卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">電視 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">筆記本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家電 插線板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">電源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 菜單 -->

        <!-- 輪播 -->
        <Swiper :options="swiperOption">
          <SwiperSlide v-for="(item, index) in slideList" :key="index">
            <a :href="`/#/product/${item.id}`">
              <img :src="item.img" />
            </a>
          </SwiperSlide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </Swiper>
        <!-- 輪播 -->
      </div>

      <!-- 廣告 -->
      <div class="ads-box"></div>
      <!-- 廣告 -->

      <!-- 廣告 -->
      <div class="banner"></div>
      <!-- 廣告 -->

      <!-- 產品 -->
      <div class="product-box"></div>
      <!-- 產品 -->
    </div>

    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '',
          img: '/imgs/slider/slide-1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" >
@import '@/assets/scss/mixin.scss';

.index {
  .swiper-box {
    position: relative;
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            display: block;
            &:after {
              content: ' ';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 17.5px;
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
