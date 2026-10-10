import { Article } from "@/types";
import articles from "./articles";

interface DatedArticle {
  article: Article;
  date: Date;
}

const datedArticles: DatedArticle[] = [
  {
    article: articles["cat"],
    date: new Date(2026, 10 - 1, 9),
  },
  {
    article: articles["outerwilds"],
    date: new Date(2026, 10 - 1, 9),
  },
  {
    article: articles["nitw"],
    date: new Date(2026, 9 - 1, 27),
  },
];

export default datedArticles;
