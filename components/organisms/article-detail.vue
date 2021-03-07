<template>
  <div>
    <p class="text-xl font-bold py-5">{{title}}</p>
    <p class="text-xs text-gray-600 text-right">{{date}}</p>
    <img :src="url" class="h-64 mx-auto" />
    <div v-html="$md.render(content)" class="my-10 markdown-body"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ArticleDetail extends Vue {
  @Prop({ type: String, required: true })
  title!: string;
  @Prop({ type: String, required: true })
  content!: string;
  @Prop({ type: String, required: true })
  url!: string;
  @Prop({ type: String, required: true })
  date!: string;
}
</script>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css";
</style>
