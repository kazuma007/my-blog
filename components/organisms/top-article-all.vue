<template>
  <div class="top-article-all my-5 flex flex-col justify-start">
    <p class="top-article-all__title my-3 truncate text-xl font-bold">
      {{ article.title }}
    </p>
    <p class="top-article-all__date text-xs truncate leading-4 text-gray-600">
      {{ article.date }}
    </p>
    <p class="top-article-all__content my-3 w-full truncate text-gray-600">
      {{ article.content }}
    </p>
    <p class="text-xs leading-4 text-blue-800 text-center">
      READ MORE
    </p>
    <hr class="top-article-all__line mt-6 border">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '~/models/article'

@Component
export default class TopArticleAll extends Vue {
  @Prop({ type: Object, required: true })
  article!: Article;

  @Prop({ type: Boolean, required: true })
  isEven!: boolean;
}
</script>
<style scoped>
.top-article-all {
  width: 49%;
}

.top-article-all__info {
  @apply w-full;
}

.top-article-all__line {
  @apply w-full;
  @apply relative;
  left: 50%;
  transform: translateX(-50%);
}

@media all and (max-width: 480px) {
  .top-article-all {
    @apply w-full;
  }

  .top-article-all {
    @apply ml-0;
  }
}
</style>
