import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { Article } from "~/models/article";

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
    const response = await this.axios.$post(this.url + "/putarticle", q);
  }

  async putTag(q: TagQuery) {
    const response = await this.axios.$post(this.url + "/puttag", q);
  }

  async get() {
    const response = await this.axios.$get(this.url + "/get");
    console.log(response);
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
}
