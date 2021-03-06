<template>
  <div class="top-swiper-article flex flex-col">
    <div class="flex justify-center">
      <img
        src="~/assets/images/article-icon.png"
        class="top-swiper-article__image"
      />
    </div>
    <div class="top-swiper-article__title mx-3">
      <p class="text-xl truncate text-gray-600 ">
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </p>
      <p class="text-xs py-2 leading-4 truncate text-gray-600 ">
        2021/03/06
      </p>
      <a href="" class="text-xs leading-4 text-blue-800">READ MORE</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component
export default class TopSwiperArticle extends Vue {
  get icon() {
    return faBars;
  }
}
</script>
<style scoped>
.top-swiper-article__image {
  height: 17rem;
  width: auto;
}
.top-swiper-article__title {
  height: 8rem;
}
</style>
