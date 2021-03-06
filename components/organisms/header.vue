<template>
  <div class="header">
    <div class="h-16 flex justify-between items-center">
      <header-left class="w-2/6" />
      <div class="w-2/6 flex justify-center">
        <img src="~/assets/images/logo.png" class="h-16" />
      </div>
      <header-right class="w-2/6" />
    </div>
    <hr class="header-line border-2" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderLeft from "~/components/atoms/header-left.vue";
import HeaderRight from "~/components/atoms/header-right.vue";

@Component({
  components: {
    HeaderLeft,
    HeaderRight
  }
})
export default class Header extends Vue {}
</script>
<style scoped>
.header-line {
  @apply w-screen;
  @apply relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
