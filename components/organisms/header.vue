<template>
  <div class="header">
    <div class="h-16 flex justify-center items-center">
      <div class="flex justify-center">
        <img src="~/assets/images/logo.png" class="h-16" @click="$emit('click-logo')">
      </div>
      <header-right
        class="header-right absolute"
        @click-twitter="$emit('click-twitter')"
        @click-github="$emit('click-github')" />
    </div>
    <hr class="header-line border-2">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HeaderLeft from '~/components/atoms/header-left.vue'
import HeaderRight from '~/components/atoms/header-right.vue'

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

.header-right {
  right: 2.5rem;
}
</style>
