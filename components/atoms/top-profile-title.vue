<template>
  <div class="bg-gray-800 w-full">
    <p class="text-white text-center px-3 py-1">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TopProfileTitle extends Vue {
  @Prop({ type: String, required: true })
  text!: string;
}
</script>
