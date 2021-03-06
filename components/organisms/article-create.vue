<template>
  <div>
    <article-create-title class="mb-5" @input-title="inputTitle" />
    <article-create-content class="mb-5" @input-content="inputContent" />
    <article-create-image @change-file="changeFile" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleCreateTitle from "~/components/atoms/article-create-title.vue";
import ArticleCreateContent from "~/components/atoms/article-create-content.vue";
import ArticleCreateImage from "~/components/atoms/article-create-image.vue";

@Component({
  components: {
    ArticleCreateTitle,
    ArticleCreateContent,
    ArticleCreateImage
  }
})
export default class ArticleCreate extends Vue {
  inputTitle(title: string) {
    this.$emit("input-title", title);
  }
  inputContent(content: string) {
    this.$emit("input-content", content);
  }
  changeFile(files: File[]) {
    this.$emit("change-file", files[0]);
  }
}
</script>
