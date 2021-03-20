<template>
  <div class="mx-5">
    <top-header />
    <div class="flex flex-wrap">
      <div class="top-article">
        <article-detail
          :title="title"
          :content="content"
          :date="date"
          :url="url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import TopProfile from "~/components/organisms/top-profile.vue";
import ArticleDetail from "~/components/organisms/article-detail.vue";

@Component({
  components: {
    TopHeader,
    TopProfile,
    ArticleDetail
  }
})
export default class TopPage extends Vue {
  get title() {
    return this.$route.params.title;
  }
  get content() {
    return this.$route.params.content;
  }
  get date() {
    return this.$route.params.date;
  }
  get url() {
    return this.$route.params.url;
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
