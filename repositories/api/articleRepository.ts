import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Article } from '~/models/article'
import { Tag } from '~/models/tag'

export interface Query {
  title: string;
  content: string;
  extension: string;
}

export interface TagQuery {
  tag: string;
}

export class ArticleRepository {
  private readonly axios: NuxtAxiosInstance;
  private url = process.env.BASE_URL;

  constructor ($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  async putArticle (q: Query) {
    await this.axios.$post(this.url + '/post/article', q)
  }

  async putTag (q: TagQuery) {
    await this.axios.$post(this.url + '/post/tag', q)
  }

  async getArticles () {
    const response = await this.axios.$get(this.url + '/get/articles')
    const articles: Article[] = []
    for (const petResponse of response) {
      const article: Article = {
        key:
          petResponse.storage_key !== '' ? petResponse.storage_key : '',
        title: petResponse.title,
        content: petResponse.content,
        date: petResponse.registered_time.substring(0, 10)
      }
      articles.push(article)
    }
    return articles
  }

  async getArticle (key: string) {
    const response = await this.axios.$get(this.url + '/get/article', {
      params: {
        key
      }
    })
    const article: Article = {
      key: response.storage_key !== '' ? response.storage_key : '',
      title: response.title,
      content: response.content,
      date: response.registered_time.substring(0, 10)
    }
    return article
  }

  async getTags () {
    const response = await this.axios.$get(this.url + '/get/tag')
    const tags: Tag[] = []
    for (const petResponse of response) {
      const tag: Tag = {
        tag: petResponse.tag
      }
      tags.push(tag)
    }
    return tags
  }
}
