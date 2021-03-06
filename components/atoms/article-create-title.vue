<template>
  <div>
    <span class="text-sm text-gray-700">Title</span>
    <input
      type="text"
      class="relative outline-none rounded py-1 px-2 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
      placeholder="title"
      @input="$emit('input-title', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ArticleCreateTitle extends Vue {}
</script>
