<template>
  <div class="mx-5">
    <top-header />
    <top-swiper-article class="top-swiper-article my-3" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import TopSwiperArticle from "~/components/organisms/top-swiper-article.vue";

@Component({
  components: {
    TopHeader,
    TopSwiperArticle
  }
})
export default class TopPage extends Vue {}
</script>
<style scoped>
.top-swiper-article {
  height: 20rem;
}
</style>
