import ArticleCard from "@/components/ArticleCard";
import articles from "@/data/articles";
import { StyleSheet, Text, View } from "react-native";

export default function Saved() {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.savedTab}>
          <Text style={{ color: "blue" }}>All Articles</Text>
          <View style={styles.tabBar}></View>
        </View>
        <View style={styles.savedTab}>
          <Text>Collections</Text>
          <View style={[styles.tabBar, { backgroundColor: "white" }]}></View>
        </View>
      </View>
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
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  tabContainer: {
    paddingTop: 15,
    width: "100%",
    height: "auto",
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomColor: "#eafcf0",
    borderBottomWidth: 1,
  },
  savedTab: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
  },
  tabBar: {
    height: 3,
    width: "100%",
    marginTop: 8,
    backgroundColor: "blue",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  articleTitle: {
    fontStyle: "italic",
    fontWeight: "800",
  },
});
