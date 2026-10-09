export interface Article {
  title: string;
  description: string;
  image: number;
  content: ArticleSection[];
}

export interface ArticleSection {
  title?: string;
  content: string;
}