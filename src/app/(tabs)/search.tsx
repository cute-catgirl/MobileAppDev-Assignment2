import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import articles from "@/data/articles";
import { StyleSheet, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <ArticleCard article={articles[0]}></ArticleCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
