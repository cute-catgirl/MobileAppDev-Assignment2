import { Article } from "@/types";

const articles: Article[] = [
  {
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
];

export default articles;
