<template>
  <div>
    <input-text-field class="mb-5" :text="'title'" @input-title="inputTitle" />
    <article-create-content class="mb-5" @input-content="inputContent" />
    <article-create-image class="mb-5" @change-file="changeFile" />
    <primary-button :text="'Create'" @click="$emit('register')" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import InputTextField from "~/components/atoms/input-text-field.vue";
import ArticleCreateContent from "~/components/atoms/article-create-content.vue";
import ArticleCreateImage from "~/components/atoms/article-create-image.vue";
import PrimaryButton from "~/components/atoms/primary-button.vue";

@Component({
  components: {
    InputTextField,
    ArticleCreateContent,
    ArticleCreateImage,
    PrimaryButton
  }
})
export default class ArticleCreate extends Vue {
  inputTitle(title: string) {
    this.$emit("input-title", title);
  }
  inputContent(content: string) {
    this.$emit("input-content", content);
  }
  changeFile(files: File[]) {
    this.$emit("change-file", files[0]);
  }
}
</script>
