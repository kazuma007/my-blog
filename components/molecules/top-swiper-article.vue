<template>
  <div class="top-swiper-article flex flex-col">
    <div class="flex justify-center">
      <img :src="article.url" class="top-swiper-article__image" />
    </div>
    <div class="top-swiper-article__title mx-3">
      <p class="text-xl truncate text-gray-600 ">
        {{ article.title }}
      </p>
      <p class="text-xs py-2 leading-4 truncate text-gray-600 ">
        {{ article.date }}
      </p>
      <p class="text-xs leading-4 text-blue-800">READ MORE</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Article } from "~/models/article";

@Component
export default class TopSwiperArticle extends Vue {
  @Prop({ type: Object, required: true })
  article!: Article;
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
