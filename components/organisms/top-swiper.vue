<template>
  <swiper :options="swiperOptions">
    <swiper-slide
      v-for="(article, index) in articles"
      :key="index"
      @click.native="$emit('click-swiper-slide')"
      ><top-swiper-article :article="article"
    /></swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import TopSwiperArticle from "~/components/molecules/top-swiper-article.vue";
import { Article } from "~/models/article";

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
  @Prop({ type: Array as PropType<string[]>, required: true })
  articles!: Article[];

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
