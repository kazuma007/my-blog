<template>
  <div class="my-5 mx-5">
    <article-create-title class="mb-5" @input-title="inputTitle" />
    <article-create-content @input-content="inputContent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleCreateTitle from "~/components/atoms/article-create-title.vue";
import ArticleCreateContent from "~/components/atoms/article-create-content.vue";

@Component({
  components: {
    ArticleCreateTitle,
    ArticleCreateContent
  }
})
export default class ArticleCreate extends Vue {
  inputTitle(title: string) {
    this.$emit("input-title", title);
  }
  inputContent(content: Event) {
    console.log(content)
    this.$emit("input-content", content);
  }
}
</script>
