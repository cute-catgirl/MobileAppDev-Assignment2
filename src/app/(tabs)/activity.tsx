import articles from "@/data/articles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Activity() {
  // values for the site to reference, meant to make it easier to make changes to the hardcoded details of the page
  const username = "USER";
  const device = "ANDRIOD";
  const timeReading = 245;
  const readArticles = {
    time: "October 6",
    count: 7,
    graphInfo: [
      { percent: 100, color: "#2b9381" },
      { percent: 12, color: "#b5ddd6" },
      { percent: 50, color: "#52aa9b" },
      { percent: 25, color: "#8ac0b7" },
    ],
  };
  const savedArticles = {
    time: "October 2",
    articleImages: [articles["dummy"].image, articles["dummy"].image, articles["dummy"].image],
  };
  const topCategories = ["Category 1", "Category 2", "Category 3"];
  return (
    <View style={styles.container}>
      {/* user's reading section */}
      <View style={styles.userReadingSection}>
        <Text style={styles.userReadingText}>{username}'s reading</Text>
        <View style={styles.onWikiDeviceBox}>
          <Text style={styles.onWikiDeviceText}>ON WIKIPEDIA {device}</Text>
        </View>
        <Text style={styles.displayedTimeSpentReadingText}>
          {Math.floor(timeReading / 60)}h {timeReading % 60}m
        </Text>
        <Text style={styles.timeSpentReadingText}>
          Time spent reading this week
        </Text>
      </View>

      {/* articles read section */}
      <View style={styles.activitySectionCard}>
        {/* section header */}
        <View style={[styles.flexRow, styles.justifyBetween]}>
          <View>
            <View style={styles.flexRow}>
              <Ionicons 
                name="book-outline"
                style={styles.sectionActivityIcon}
              />
              <Text style={styles.sectionHeaderText}>
                Articles read this month
              </Text>
            </View>
            <Text style={styles.sectionTimeText}>
              {readArticles.time}
            </Text>
          </View>
          <Ionicons 
            name="chevron-forward-outline"
            style={styles.sectionDropdownIcon}
          />
        </View>
        {/* section content */}
        <View style={[styles.flexRow, styles.justifyBetween]}>
          <Text style={styles.sectionCountText}>{readArticles.count}</Text> 
          <View style={styles.articlesReadGraph}>
            {readArticles.graphInfo.map((bar, b) => (
              <View key={b} style={styles.articleGraphEntry}>
                <View
                  style={[
                    styles.articlesGraphItem,
                    { height: `${bar.percent}%`, backgroundColor: bar.color },
                  ]}
                ></View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* articles saved section */}
      <View style={styles.activitySectionCard}>
        {/* section header */}
        <View style={[styles.flexRow, styles.justifyBetween]}>
          <View>
            <View style={styles.flexRow}>
              <Ionicons
                name="bookmark-outline"
                style={styles.sectionActivityIcon}
              />
              <Text style={styles.sectionHeaderText}>
                Articles saved this month
              </Text>
            </View>
            <Text style={styles.sectionTimeText}>{savedArticles.time}</Text>
          </View>
          <Ionicons 
            name="chevron-forward-outline"
            style={styles.sectionDropdownIcon}
          />
        </View>
        {/* section content */}
        <View style={[styles.flexRow, styles.justifyBetween]}>
          <Text style={styles.sectionCountText}>
            {savedArticles.articleImages.length}
          </Text>
          <View style={styles.savedArticlesImageContainer}>
            {savedArticles.articleImages.map((articleImage, i) => (
              <Image
                key={i}
                source={articleImage}
                style={styles.savedArticlesImage}
              />
            ))}
          </View>
        </View>
      </View>

      {/* top categories read this month */}
      <View style={styles.activitySectionCard}>
        {/* section header */}
        <View style={styles.flexRow}>
          <Ionicons 
            name="shapes-outline"
            style={styles.sectionActivityIcon}
          />
          <Text style={styles.sectionHeaderText}>
            Top categories read this month
          </Text>
        </View>
        {/* section content */}
        {topCategories.map((category, c) => (
          <View key={c} style={styles.topCategoryEntry}>
            <Text style={styles.topCategoryText}>{category}</Text>
            <View style={styles.topCategorySeperator} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
    marginTop: 5,
  },
  activitySectionCard: {
    minHeight: 100,
    backgroundColor: "#ffffff",
    borderColor: "#bdbcbc",
    borderWidth: 1,
    width: "90%",
    borderRadius: 5,
    padding: 10,
    textAlign: "left",
    justifyContent: "space-between",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  sectionActivityIcon: {
    color: "#000000",
    width: 12,
    height: 12,
    paddingRight: 20,
  },
  sectionDropdownIcon: {
    color: "#000000",
    width: 16,
    height: 16,
  },
  sectionHeaderText: {
    color: "#000000",
    fontSize: 12,
  },
  sectionTimeText: {
    color: "#2c2c2c",
    fontSize: 10,
  },
  sectionCountText: {
    color: "#000000",
    fontSize: 24,
  },
  userReadingSection: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  userReadingText: {
    fontSize: 18,
  },
  onWikiDeviceBox: {
    backgroundColor: "#cbeaf7",
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  onWikiDeviceText: {
    color: "#232324",
    fontSize: 8,
  },
  displayedTimeSpentReadingText: {
    color: "#ffbb00",
    fontSize: 30,
    paddingTop: 5,
  },
  timeSpentReadingText: {
    fontSize: 12,
  },
  articlesReadGraph: {
    flexDirection: "row",
    height: 40,
    columnGap: 10,
  },
  articleGraphEntry: {
    flexDirection: "column",
    justifyContent: "flex-end",
    width: 10,
  },
  articlesGraphItem: {
    width: "100%",
  },
  savedArticlesImageContainer: {
    flexDirection: "row",
    columnGap: 5,
  },
  savedArticlesImage: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  topCategoryEntry: {
    rowGap: 10,
  },
  topCategoryText: {
    color: "#595959",
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  topCategorySeperator: {
    backgroundColor: "#ecebeb",
    width: "100%",
    height: 1,
  },
});
