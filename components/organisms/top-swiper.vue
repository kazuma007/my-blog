<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(article, index) in articles" :key="index">
      <top-swiper-article
        :article="article"
        @click.native="clickSwiperSlide(index)"
      />
    </swiper-slide>
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

  clickSwiperSlide(index: any) {
    this.$emit("click-swiper-slide", this.articles[index]);
  }

  swiperOptions: object = {
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
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: -10px;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: -10px;
}
@media (min-width: 1024px) {
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: 3rem;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: 3rem;
  }
}
</style>
