<template>
  <swiper :options="swiperOptions">
    <swiper-slide><top-swiper-article /></swiper-slide>
    <swiper-slide><top-swiper-article /></swiper-slide>
    <swiper-slide><top-swiper-article /></swiper-slide>
    <swiper-slide><top-swiper-article /></swiper-slide>
    <swiper-slide><top-swiper-article /></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import TopSwiperArticle from "~/components/molecules/top-swiper-article.vue";

@Component({
  components: {
    Swiper,
    SwiperSlide,
    TopSwiperArticle
  },
  directives: {
    swiper: directive
  }
})
export default class TopSwiper extends Vue {
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
<style scoped>
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 1rem;
}
</style>
