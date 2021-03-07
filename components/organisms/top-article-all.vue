<template>
  <div
    class="top-article-all w-full flex flex-wrap justify-center items-center"
  >
    <div class="top-article-all__image_area flex justify-center">
      <img :src="article.url" class="top-article-all__image" />
    </div>
    <div class="top-article-all__info mx-3">
      <p class="top-article-all__tag text-xs truncate leading-4 text-gray-600">
        タグ
      </p>
      <p class="top-article-all__title my-3 truncate text-xl font-bold">
        {{ article.title }}
      </p>
      <p class="top-article-all__date text-xs truncate leading-4 text-gray-600">
        {{ article.date }}
      </p>
      <p class="top-article-all__content my-3 truncate text-gray-600">
        {{ article.content }}
      </p>
      <a href="" class="text-xs leading-4 text-blue-800">READ MORE</a>
    </div>
    <hr class="top-article-all__line mt-6 border" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Article } from "~/models/article";

@Component
export default class TopArticleAll extends Vue {
  @Prop({ type: Object, required: true })
  article!: Article;
}
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
