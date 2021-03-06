<template>
  <div class="mx-5">
    <top-header />
    <div class="flex flex-wrap">
      <div class="top-article">
        <article-detail :text="text" class="mx-5" />
      </div>
      <top-profile class="top-profile" />
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
  text: string = "# h1 Heading 8-)";
}
</script>
<style scoped>
.top-article {
  @apply w-full;
}
.top-profile {
  @apply py-6;
  @apply w-full;
}
@media (min-width: 1024px) {
  .top-article {
    width: 70%;
  }
  .top-profile {
    width: 30%;
  }
}
</style>
