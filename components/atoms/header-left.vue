<template>
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
