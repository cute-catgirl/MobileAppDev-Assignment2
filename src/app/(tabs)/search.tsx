import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import articles from "@/data/articlesHistory";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <ScrollView
      horizontal={false}
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <SearchBar></SearchBar>
      <View style={styles.historyHeader}>
        <Text style={styles.history}>History</Text>
        <Ionicons
          style={styles.icons}
          name="filter-sharp"
          color="#202122"
          size={24}
        />
        <Ionicons
          style={styles.icons}
          name="trash-sharp"
          color="#202122"
          size={24}
        />
      </View>
      {articles.slice(0, 10).map((datedarticle, index) => {
        const showDate =
          index === 0 ||
          datedarticle.date.toDateString() !== articles[index - 1].date.toDateString();

        return (
          <View key={`${datedarticle.article.title}-${index}`} style={styles.dateGroup}>
            {showDate && (
              <Text style={styles.dateTitle}>
                {datedarticle.date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            )}
            <ArticleCard article={datedarticle.article} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexGrow: 1,
    padding: 8,
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },

  history: {
    flex: 1,
    color: "rgb(28, 28, 30)",
    fontFamily:
      'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontWeight: 500,
    fontSize: 18,
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  historyHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  dateGroup: {
    width: "100%",
  },
  dateTitle: {
    width: "100%",
    color: "#72777d",
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 8,
    marginTop: 8,
  },
  icons: {
    margin:8,
  }
});
