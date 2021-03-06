<template>
  <div class="mx-5">
    <div class="flex flex-wrap justify-center">
      <article-create
        class="article-create"
        @input-title="inputTitle"
        @input-content="inputContent"
      />
      <article-create-check
        class="article-create-check"
        :title="title"
        :content="content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleCreate from "~/components/organisms/article-create.vue";
import ArticleCreateCheck from "~/components/organisms/article-create-check.vue";

@Component({
  components: {
    ArticleCreate,
    ArticleCreateCheck
  }
})
export default class TopPage extends Vue {
  title: string = "";
  content: string = "";
  inputTitle(title: string) {
    console.log(title);
    this.title = title;
  }
  inputContent(content: string) {
    console.log(content);
    this.content = content;
  }
}
</script>
<style scoped>
.article-create {
  @apply w-full;
}
.article-create-check {
  @apply w-full;
}
@media (min-width: 1024px) {
  .article-create {
    width: 48%;
  }
  .article-create-check {
    width: 48%;
  }
}
</style>
