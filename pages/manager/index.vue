<template>
  <div class="mx-5">
    <top-header
      @click-twitter="navigateToTwitter"
      @click-github="navigateToGithub"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";

@Component({
  components: {
    TopHeader
  }
})
export default class TopPage extends Vue {
  navigateToTwitter() {
    window.open("https://twitter.com/DYc94Wnm9pW9", "_blank");
  }
  
  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
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
