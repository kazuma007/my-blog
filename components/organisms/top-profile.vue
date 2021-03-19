<template>
  <div class="top-profile px-5">
    <div class="text-center pb-5">
      <top-profile-title :text="'About me'" class="mb-3" />
      <img
        src="~/assets/images/aigahaku.png"
        class="top-profile__image mx-auto"
      />
      <p class="py-3">Kintaro</p>
      <p>こんにちは！</p>
    </div>
    <div class="py-3 text-center pb-5">
      <top-profile-title :text="'Follow me'" class="mb-3" />
      <fa
        :icon="iconTwitter"
        class="mr-6 text-3xl"
        @click="$emit('click-twitter')"
      />
      <fa :icon="iconGithub" class="text-3xl" @click="$emit('click-github')" />
    </div>
    <div class="py-3 pb-5">
      <top-profile-title :text="'Labels（実装予定）'" class="mb-3" />
      <top-profile-label
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag.tag"
        class="my-2"
      />
    </div>
    <div>
      <top-profile-title :text="'Archive（実装予定）'" class="mb-3" />
      <p>2021/04</p>
      <p>2021/03</p>
      <p>2021/02</p>
      <p>2021/01</p>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import TopProfileLabel from "~/components/atoms/top-profile-label.vue";
import TopProfileTitle from "~/components/atoms/top-profile-title.vue";
import { Tag } from "~/models/tag";

@Component({
  components: {
    TopProfileLabel,
    TopProfileTitle
  }
})
export default class TopProfile extends Vue {
  @Prop({ type: Array as PropType<Object[]>, required: true })
  tags!: Tag[];

  get iconTwitter() {
    return faTwitter;
  }
  get iconGithub() {
    return faGithub;
  }
}
</script>
<style scoped>
.top-profile__image {
  height: 15rem;
}
</style>
