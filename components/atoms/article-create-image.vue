<template>
  <div>
    <span class="text-sm text-gray-700">Picture</span>
    <input
      type="file"
      class="relative outline-none rounded py-1 px-2 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
      @change="changeFile">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ArticleCreateImage extends Vue {
  changeFile (e: Event) {
    const target = e.target as HTMLInputElement
    if (!target) {
      return
    }
    this.$emit('change-file', target.files)
  }
}
</script>
