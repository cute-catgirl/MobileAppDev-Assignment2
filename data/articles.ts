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
    image: require("@/assets/images/articles/cat.jpg"),
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
  outerwilds: {
    title: "Outer Wilds",
    description: "2019 video game",
    image: require("@/assets/images/articles/outerwilds.jpg"),
    content: [
      {
        content:
          "**Outer Wilds** is a 2019 action-adventure game developed by Mobius Digital and published by Annapurna Interactive. The game follows the player character as they explore a planetary system stuck in a 22-minute time loop that resets after the sun goes supernova and destroys the system. Through repeated attempts, they investigate the alien ruins of the Nomai to discover their history and the cause of the time loop.",
      },
    ],
  },
  nitw: {
    title: "Night in the Woods",
    description: "2017 video game",
    image: require("@/assets/images/articles/nitw.jpg"),
    content: [
      {
        content:
          "**Night in the Woods** is a 2017 single-player adventure video game developed by Infinite Fall and Secret Lab and published by Finji. Set in a world of zoomorphic humans, the story follows a young woman named Mae, who drops out of college and returns to her hometown to find unexpected changes. The game was funded via Kickstarter, where it earned over four times its initial US$50,000 funding goal.",
      },
      {
        title: "Overview and gameplay",
        content:
          "Night in the Woods takes place in Possum Springs, a town populated by zoomorphic humans. The player takes the role of Mae, a young cat that has returned to Possum Springs after dropping out of college. Now living in her parents' attic, she discovers how much times have changed since the closing of the town's coal mines. She is forced to confront a horrible secret the town has hidden for decades involving not only the town's mine, but also the recent disappearance of her longtime friend Casey. Mae's friends also include Bea, a cigarette-smoking crocodile and Mae's childhood friend; Gregg, a hyperactive fox; and his boyfriend, a bear named Angus. Paste magazine describes the themes covered as \"mental illness, depression, the stagnancy of the middle and lower classes, and the slow death of small town America.\"",
      },
    ],
  },
};

export default articles;
