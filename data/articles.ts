import { Article } from "@/types";

const articles: Record<string, Article> = {
  dummy: {
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
  cat: {
    title: "Cat",
    description: "Small domesticated carnivorous mammal",
    image: require("@/assets/images/articles/dummy-article.png"),
    content: [
      {
        content:
          "The **cat** (***Felis catus***), also called **domestic cat** and **house cat**, is a small domesticated carnivorous mammal. It is a member of Felidae, the family of mammals in the order Carnivora also colloquially referred to as cats. An obligate carnivore requiring a predominantly meat-based diet, it has retractable claws adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed.",
      },
      {
        title: "Etymology and naming",
        content:
          "The origin of the English word cat, Old English catt, is thought to be the Late Latin word cattus, which was first used at the beginning of the 6th century. The Late Latin word may be derived from an unidentified African language. The Nubian word kaddîska 'wildcat' and Nobiin kadīs are possible sources or cognates.",
      },
    ],
  },
};
