<template>
  <button
    class="py-3 px-4 rounded-2xl bg-blue-600 text-white"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PrimaryButton extends Vue {
  @Prop({ type: String, required: true })
  text!: string;
}
</script>
