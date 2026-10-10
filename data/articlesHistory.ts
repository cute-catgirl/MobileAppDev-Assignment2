import { Article } from "@/types";

interface DatedArticle {
  article: Article,
  date: Date,
}

const articles: DatedArticle[] = [
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 10-1, 9),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 10-1, 9),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 10-1, 6),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 10-1, 6),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 10-1, 6),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 9-1, 27),
  },
  {
    article: {
      title: "Dummy Article",
      description: "A short description of the article",
      image: require("@/assets/images/articles/dummy-article.png"),
      content: [
        {
          content: "The contents of the article",
        },
        {
          title: "Section title",
          content: "The contents of this section",
        },
      ],
    },
    date: new Date(2026, 9-1, 27),
  },
];

export default articles;
