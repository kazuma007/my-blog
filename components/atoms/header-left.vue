<template>
  <!-- <div class="flex justify-between items-center">
    <fa :icon="icon" />
    <p>About</p>
    <p>Categories</p>
  </div> -->
  <div>
    <fa :icon="icon" class="text-3xl" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component
export default class HeaderLeft extends Vue {
  get icon() {
    return faBars;
  }
}
</script>
