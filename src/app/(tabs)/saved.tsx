import ArticleCard from "@/components/ArticleCard";
import articles from "@/data/articles";
import { StyleSheet, View } from "react-native";

export default function Saved() {
  return (
    <View style={styles.container}>
      <ArticleCard
        article={articles[0]}
        titleStyle={styles.articleTitle}
      ></ArticleCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  articleTitle: {
    fontStyle: "italic",
    fontWeight: "800",
  },
});
