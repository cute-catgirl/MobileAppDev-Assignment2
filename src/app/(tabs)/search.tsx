import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import articles from "@/data/articles";
import { StyleSheet, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <h1 style={styles.history}>History</h1>
      <ArticleCard article={articles["dummy"]}></ArticleCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },

  history: {
    width: "100%",
    color: "rgb(28, 28, 30)",
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontWeight: 500,
    fontSize: 18,
    marginLeft: 16,
  },
});
