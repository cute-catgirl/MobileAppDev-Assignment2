import ArticleCard from "@/components/ArticleCard";
import articles from "@/data/articles";
import { StyleSheet, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <ArticleCard article={articles[0]}></ArticleCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
