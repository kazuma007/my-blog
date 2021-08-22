<template>
  <div class="mx-5">
    <top-header
      @click-twitter="navigateToTwitter"
      @click-github="navigateToGithub"
      @click-logo="navigateToTop"
    />
    <div class="top-article w-full flex flex-wrap justify-center">
      <top-article-all
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
        :is-even="index + 1 !== 1 && (index + 1) % 2 === 0"
        @click.native="navigateToArticle(article)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import TopArticleAll from "~/components/organisms/top-article-all.vue";
import { Article } from "~/models/article";
import { Tag } from "~/models/tag";

@Component({
  components: {
    TopHeader,
    TopArticleAll
  }
})
export default class TopPage extends Vue {
  articles: Article[] = [];
  tags: Tag[] = [];

  async mounted() {
    await this.getArticles();
    await this.getTags();
  }

  async getArticles() {
    const data = await this.$repositories.article.getArticles();
    this.articles = data;
  }

  async getTags() {
    const data = await this.$repositories.article.getTags();
    this.tags = data;
  }

  navigateToTwitter() {
    window.open("https://twitter.com/DYc94Wnm9pW9", "_blank");
  }

  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
  }

  navigateToTop() {
    console.log("hi")
    this.$router.push("/");
  }

  navigateToArticle(article: Article) {
    this.$router.push({
      name: "article",
      query: {
        key: article.key
      }
    });
  }
}
</script>
