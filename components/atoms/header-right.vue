<template>
  <div class="flex justify-end">
    <fa
      :icon="iconTwitter"
      class="mr-6 text-3xl"
      @click="$emit('click-twitter')" />
    <fa :icon="iconGithub" class="text-3xl" @click="$emit('click-github')" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component
export default class HeaderRight extends Vue {
  get iconTwitter () {
    return faTwitter
  }

  get iconGithub () {
    return faGithub
  }
}
</script>
