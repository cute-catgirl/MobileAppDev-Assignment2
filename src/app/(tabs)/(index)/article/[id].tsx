import articles from "@/data/articles";
import { Article, ArticleSection } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";

function Section({ section }: { section: ArticleSection }) {
  if (section.title) {
    return (
      <View>
        <Text style={styles.header}>{section.title}</Text>
        <Markdown>{section.content}</Markdown>
      </View>
    );
  } else {
    return (
      <View>
        <Markdown>{section.content}</Markdown>
      </View>
    );
  }
}

export default function Home() {
  const { id }: { id: string } = useLocalSearchParams();
  const article: Article = articles[id];
  if (article) {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: "100%" }}>
          <Image source={article.image} style={styles.coverImage}></Image>
          <View style={styles.articleContents}>
            <Text style={styles.header}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
            {article.content.map((value, index) => (
              <Section key={index} section={value}></Section>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Article not found :(</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  coverImage: {
    maxHeight: 300,
    width: "100%",
  },
  articleContents: {
    margin: 10,
    gap: 5,
  },
  header: {
    fontFamily: "serif",
    fontSize: 22,
  },
  description: {
    fontSize: 14,
    color: "#404244",
  },
});
