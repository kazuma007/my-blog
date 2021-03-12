<template>
  <div class="mx-5">
    <top-header
      @click-twitter="navigateToTwitter"
      @click-github="navigateToGithub"
    />
    <div class="py-3">
      <p class="text-xl text-gray-600 font-bold">記事一覧</p>
      <ul class="bg-gray-100 border-2 my-3">
        <li>
          タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
      </ul>
      <primary-button
        :text="'New Article'"
        class="my-3"
        @click="navigateToCreateArticle"
      />
    </div>
    <div class="py-3">
      <p class="text-xl text-gray-600 font-bold my-3">タグ一覧</p>
      <ul class="bg-gray-100 border-2">
        <li>
          英語
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          英語
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          英語
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
        <li>
          英語
          <fa
            :icon="icon"
            class="mx-3 text-xl"
            @click="$('click-delete-tag')"
          />
        </li>
      </ul>
      <primary-button :text="'New Tag'" class="my-3" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import PrimaryButton from "~/components/atoms/primary-button.vue";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

@Component({
  components: {
    TopHeader,
    PrimaryButton
  }
})
export default class TopPage extends Vue {
  navigateToTwitter() {
    window.open("https://twitter.com/DYc94Wnm9pW9", "_blank");
  }

  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
  }

  navigateToCreateArticle() {
    this.$router.push({ name: "manager-article" });
  }

  get icon() {
    return faWindowClose;
  }
}
</script>
