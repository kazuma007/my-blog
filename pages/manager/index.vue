<template>
  <div class="mx-5">
    <div class="flex flex-wrap justify-center">
      <article-create
        class="article-create mt-5 mb-10 mx-5"
        @input-title="inputTitle"
        @input-content="inputContent"
        @change-file="changeFile"
        @register="registerArticle" />
      <article-create-check
        class="article-create-check my-5"
        :title="title"
        :content="content" />
    </div>
    <p v-if="isEmpty" class="text-center text-xl text-red-600 font-bold mb-40">
      You forgot to fill in section(s)
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ArticleCreate from '~/components/organisms/article-create.vue'
import ArticleCreateCheck from '~/components/organisms/article-create-check.vue'
import { Query } from '~/repositories/api'

@Component({
  components: {
    ArticleCreate,
    ArticleCreateCheck
  }
})
export default class TopPage extends Vue {
  title: string = '';
  content: string = '';
  file: File = {} as File;
  isEmpty: boolean = false;

  inputTitle (title: string) {
    this.title = title
  }

  inputContent (content: string) {
    this.content = content
  }

  async registerArticle () {
    if (!this.title || !this.content) {
      this.isEmpty = true
    }
    const q: Query = {
      title: this.title,
      content: this.content,
      extension: this.file.type
    }
    await this.$repositories.article.putArticle(q)
    this.$router.push({
      path: '/'
    })
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
