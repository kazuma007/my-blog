<template>
  <div class="my-5">
    <div>
      <span class="text-sm text-gray-700">Title</span>
      <p class="text-xl font-bold">{{ title }}</p>
    </div>
    <div>
      <span class="text-sm text-gray-700">Content</span>
      <div v-html="$md.render(content)" class="markdown-body"></div>
      <!-- <article className="prose prose-lg max-w-none">
        {{ content }}
      </article> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ArticleCreateCheck extends Vue {
  @Prop({ type: String, required: true })
  title!: string;
  @Prop({ type: String, default: "" })
  content!: string;
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css";
</style>
