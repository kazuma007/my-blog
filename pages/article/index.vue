<template>
  <div class="mx-5">
    <top-header
      @click-twitter="navigateToTwitter"
      @click-github="navigateToGithub"
      @click-logo="navigateToTop"
    />
    <div class="flex flex-wrap">
      <div class="top-article">
        <article-detail :article="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import ArticleDetail from "~/components/organisms/article-detail.vue";
import { Article } from "~/models/article";

@Component({
  components: {
    TopHeader,
    ArticleDetail
  }
})
export default class TopPage extends Vue {
  article: Article = {} as Article;

  async mounted() {
    await this.getArticle();
  }

  async getArticle() {
    const key = this.$route.query.key;
    const data = await this.$repositories.article.getArticle(String(key));
    this.article = data;
  }

  navigateToTwitter() {
    window.open("https://twitter.com/DYc94Wnm9pW9", "_blank");
  }

  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
  }

  navigateToTop() {
    this.$router.push("/");
  }
}
</script>
<style scoped>
.top-article {
  @apply w-full;
}
@media (min-width: 1024px) {
  .top-article {
    @apply mx-32;
  }
}
</style>
