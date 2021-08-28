<template>
  <button class="bg-gray-300 inline px-2 text-gray-600">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TopProfileLabel extends Vue {
  @Prop({ type: String, required: true })
  text!: string;
}
</script>
