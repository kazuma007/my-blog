import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { Article } from "~/models/article";
import { Tag } from "~/models/tag";

export interface Query {
  title: string;
  content: string;
  file: string;
  extension: string;
}

export interface TagQuery {
  tag: string;
}

export class ArticleRepository {
  private readonly axios: NuxtAxiosInstance;
  private url = process.env.BASE_URL;

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios;
  }

  async putArticle(q: Query) {
    const response = await this.axios.$post(this.url + "/post/article", q);
  }

  async putTag(q: TagQuery) {
    const response = await this.axios.$post(this.url + "/post/tag", q);
  }

  async getArticles() {
    const response = await this.axios.$get(this.url + "/get/article");
    const articles: Article[] = [];
    for (let petResponse of response) {
      const article: Article = {
        url:
          petResponse["storage_key"] !== ""
            ? process.env.S3_URL + petResponse["storage_key"]
            : "",
        title: petResponse["title"],
        content: petResponse["content"],
        date: petResponse["registered_time"].substring(0, 10)
      };
      articles.push(article);
    }
    return articles;
  }

  async getTags() {
    const response = await this.axios.$get(this.url + "/get/tag");
    const tags: Tag[] = [];
    for (let petResponse of response) {
      const tag: Tag = {
        tag: petResponse["tag"],
      };
      tags.push(tag);
    }
    return tags;
  }
}
