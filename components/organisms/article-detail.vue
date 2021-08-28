<template>
  <div>
    <p class="text-xl font-bold py-5">
      {{ article.title }}
    </p>
    <p class="text-xs text-gray-600 text-right">
      {{ article.date }}
    </p>
    <div
      class="my-10 markdown-body"
      v-html="$md.render(String(article.content))" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Article } from '~/models/article'

@Component({
  components: {}
})
export default class ArticleDetail extends Vue {
  @Prop({ type: Object, required: true })
  article!: Article;
}
</script>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css";
</style>
