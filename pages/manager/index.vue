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
      <p class="text-xl text-gray-600 font-bold my-3">タグ</p>
      <input-text-field
        class="w-32"
        :isShow="false"
        :text="'タグ'"
        @input-title="inputTitle"
      />
      <primary-button :text="'New Tag'" class="my-3" @click="registerTag" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopHeader from "~/components/organisms/header.vue";
import PrimaryButton from "~/components/atoms/primary-button.vue";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import InputTextField from "~/components/atoms/input-text-field.vue";
import {TagQuery, ArticleRepository} from "~/repositories/api"

@Component({
  components: {
    TopHeader,
    PrimaryButton,
    InputTextField
  }
})
export default class TopPage extends Vue {
  tag: string = "";

  navigateToTwitter() {
    window.open("https://twitter.com/DYc94Wnm9pW9", "_blank");
  }

  navigateToGithub() {
    window.open("https://github.com/kazuma007", "_blank");
  }

  navigateToCreateArticle() {
    this.$router.push({ name: "manager-article" });
  }

  inputTitle(tag: string) {
    this.tag = tag;
  }

  async registerTag() {
    if (!this.tag) {
      return
    }
    const q: TagQuery = {
      tag: this.tag,
    };
    await this.$repositories.article.putTag(q)
    this.$router.push({
      path: "/"
    });
  }

  get icon() {
    return faWindowClose;
  }
}
</script>
