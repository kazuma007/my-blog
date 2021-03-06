<template>
  <div>
    <span class="text-sm text-gray-700">Content</span>
    <textarea
      class="elative outline-none rounded py-1 px-2 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
      rows="80"
      @input="$emit('input-content', $event.target.value)"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ArticleCreateContent extends Vue {}
</script>
