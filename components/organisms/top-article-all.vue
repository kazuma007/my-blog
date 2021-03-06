<template>
  <div class="top-article-all w-full flex flex-wrap justify-center items-center">
    <div class="top-article-all__image_area flex justify-center">
      <img
        src="~/assets/images/article-icon.png"
        class="top-article-all__image"
      />
    </div>
    <div class="top-article-all__info mx-3">
      <p class="top-article-all__tag text-xs truncate leading-4 truncate text-gray-600">
        タグ
      </p>
      <p class="top-article-all__title my-3 truncate text-xl font-bold">
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </p>
      <p class="top-article-all__date text-xs truncate leading-4 truncate text-gray-600">
        2021/03/06
      </p>
      <p
        class="top-article-all__content my-3 truncate truncate text-gray-600"
      >
      コンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツコンテンツ
      </p>
      <a href="" class="text-xs leading-4 text-blue-800">READ MORE</a>
    </div>
    <hr class="top-article-all__line mt-2 border" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class TopArticleAll extends Vue {}
</script>
<style scoped>
.top-article-all__image_area {
  width: 20rem;
}
.top-article-all__info {
  width: 20rem;
}

.top-article-all__image {
  height: 20rem;
  width: auto;
}
.top-swiper-article__title {
  height: 5rem;
}
.top-article-all__line {
  @apply w-screen;
  @apply relative;
  left: 50%;
  transform: translateX(-50%);
}

</style>
