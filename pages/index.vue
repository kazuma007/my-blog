<template>
  <div class="mx-5">
    <top-header
      @click-twitter="navigateToTwitter"
      @click-github="navigateToGithub"
    />
    <top-swiper
      class="top-swiper-article my-10"
      :articles="articles"
      @click-swiper-slide="navigateToArticle"
    />
    <div class="flex flex-wrap">
      <div class="top-article">
        <top-article-all
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
          @click.native="navigateToArticle(article)"
        />
      </div>
      <top-profile
        class="top-profile"
        :tags="tags"
        @click-twitter="navigateToTwitter"
        @click-github="navigateToGithub"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import TopSwiper from "~/components/organisms/top-swiper.vue";
import TopArticleAll from "~/components/organisms/top-article-all.vue";
import TopProfile from "~/components/organisms/top-profile.vue";
import { Article } from "~/models/article";
import { Tag } from "~/models/tag";

@Component({
  components: {
    TopHeader,
    TopSwiper,
    TopArticleAll,
    TopProfile
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
    window.open("https://twitter.com/IR4n6YAKksPd1X", "_blank");
  }

  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
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
<style scoped>
.top-swiper-article {
  height: 25rem;
  @apply w-full;
}
.top-article {
  @apply w-full;
}
.top-profile {
  @apply py-6;
  @apply w-full;
}
@media (min-width: 1024px) {
  .top-swiper-article {
    width: 40%;
  }
  .top-article {
    width: 70%;
  }
  .top-profile {
    width: 30%;
  }
}
</style>
