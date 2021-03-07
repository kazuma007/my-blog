<template>
  <div>
    <article-create-title class="mb-5" @input-title="inputTitle" />
    <article-create-content class="mb-5" @input-content="inputContent" />
    <article-create-image class="mb-5" @change-file="changeFile" />
    <article-create-button :text="'Create'" @click="$emit('register')" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleCreateTitle from "~/components/atoms/article-create-title.vue";
import ArticleCreateContent from "~/components/atoms/article-create-content.vue";
import ArticleCreateImage from "~/components/atoms/article-create-image.vue";
import ArticleCreateButton from "~/components/atoms/article-create-button.vue";

@Component({
  components: {
    ArticleCreateTitle,
    ArticleCreateContent,
    ArticleCreateImage,
    ArticleCreateButton
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
