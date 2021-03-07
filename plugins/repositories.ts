// plugin/repository.ts

import { Context } from "@nuxt/types";
import { Inject } from "@nuxt/types/app";
import { ArticleRepository } from "~/repositories/api";

export interface Repositories {
  article: ArticleRepository;
}

export default function({ $axios }: Context, inject: Inject) {
  const article = new ArticleRepository($axios);

  const repositories: Repositories = {
    article
  };
  inject("repositories", repositories);
}
