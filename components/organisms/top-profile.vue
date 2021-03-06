<template>
  <div class="top-profile flex flex-col px-5">
    <div>
      <p class="text-xl bold">About me</p>
      <img src="~/assets/images/article-icon.png" class="top-profile__image" />
      <p class="py-3">山田太郎</p>
      <p>自己紹介を書く</p>
    </div>
    <div class="py-3">
      <p class="text-xl bold py-3">Follow me</p>
      <fa :icon="iconTwitter" class="mr-6 text-3xl" />
      <fa :icon="iconGithub" class="text-3xl" />
    </div>
    <div class="py-3">
      <p class="text-xl bold">Labels</p>
      <top-profile-label :text="'タグ'" />
      <top-profile-label :text="'タグ'" />
      <top-profile-label :text="'タグ'" />
      <top-profile-label :text="'タグ'" />
      <top-profile-label :text="'タグ'" />
      <top-profile-label :text="'タグ'" />
    </div>
    <div>
      <p class="text-xl bold">ARCHIVE</p>
      <p>2021/04</p>
      <p>2021/03</p>
      <p>2021/02</p>
      <p>2021/01</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import TopProfileLabel from "~/components/atoms/top-profile-label.vue";

@Component({
  components: { TopProfileLabel }
})
export default class TopProfile extends Vue {
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
