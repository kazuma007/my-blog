<template>
  <div class="mx-5">
    <top-header />
    <top-swiper class="top-swiper-article my-3" />
    <div class="flex flex-wrap">
      <div class="top-article">
        <top-article-all v-for="index in 5" :key="index" />
      </div>
      <top-profile class="top-profile" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import TopSwiper from "~/components/organisms/top-swiper.vue";
import TopArticleAll from "~/components/organisms/top-article-all.vue";
import TopProfile from "~/components/organisms/top-profile.vue";

@Component({
  components: {
    TopHeader,
    TopSwiper,
    TopArticleAll,
    TopProfile
  }
})
export default class TopPage extends Vue {}
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
