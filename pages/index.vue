<template>
  <div class="mx-5">
    <top-header />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue"

@Component({
  components: {
    TopHeader
  }
})
export default class TopPage extends Vue {}
</script>
