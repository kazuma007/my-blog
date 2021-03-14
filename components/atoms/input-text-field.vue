<template>
  <div>
    <span class="text-sm text-gray-700" v-if="isShow">{{ text }}</span>
    <input
      type="text"
      class="relative outline-none rounded py-1 px-2 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
      :placeholder="text"
      @input="$emit('input-title', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class InputTextField extends Vue {
  @Prop({ type: String, required: true })
  text!: string;

  @Prop({ type: Boolean, default: true })
  isShow!: boolean;
}
</script>
