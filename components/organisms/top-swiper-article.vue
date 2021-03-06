<template>
  <swiper :options="swiperOptions">
    <swiper-slide><img src="~/assets/images/article-icon.png"/></swiper-slide>
    <swiper-slide><img src="~/assets/images/article-icon.png"/></swiper-slide>
    <swiper-slide><img src="~/assets/images/article-icon.png"/></swiper-slide>
    <swiper-slide><img src="~/assets/images/article-icon.png"/></swiper-slide>
    <swiper-slide><img src="~/assets/images/article-icon.png"/></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

@Component({
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
})
export default class TopSwiperArticle extends Vue {
  swiperOptions: object = {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  };
}
</script>
