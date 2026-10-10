import articles from "@/data/articles";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Activity() {
  // values for the site to reference, meant to make it easier to make changes to the hardcoded details of the page
  const username = "USER";
  const device = "ANDROID";
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
    articleImages: [
      articles["cat"].image,
      articles["nitw"].image,
      articles["outerwilds"].image,
    ],
  };
  const topCategories = [
    "Indie games",
    "Windows games",
    "Domesticated animals",
  ];
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffffff", "#6699FF26"]}
        style={styles.background}
      />
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
                name="library-outline"
                style={styles.sectionActivityIcon}
                size={12}
              />
              <Text style={styles.sectionHeaderText}>
                Articles read this month
              </Text>
            </View>
            <Text style={styles.sectionTimeText}>{readArticles.time}</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            style={styles.sectionDropdownIcon}
            size={16}
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
                size={12}
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
            size={16}
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
            size={12}
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
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    rowGap: 10,
    marginTop: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  activitySectionCard: {
    minHeight: 100,
    backgroundColor: "#ffffff",
    borderColor: "#dadde3",
    borderWidth: 1,
    width: "90%",
    borderRadius: 8,
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
    paddingRight: 6,
  },
  sectionDropdownIcon: {
    color: "#000000",
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
    fontSize: 22,
    fontWeight: 500,
    marginTop: 16,
  },
  onWikiDeviceBox: {
    backgroundColor: "#e8eeff",
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  onWikiDeviceText: {
    color: "#232324",
    fontSize: 11,
    fontFamily: "monospace",
  },
  displayedTimeSpentReadingText: {
    color: "#FF9500",
    fontSize: 30,
    paddingTop: 5,
    fontWeight: 600,
  },
  timeSpentReadingText: {
    fontSize: 13,
    fontWeight: 600,
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
    justifyContent: "center",
  },
  topCategoryText: {
    color: "#595959",
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 20,
    textAlignVertical: "center",
    fontWeight: 600,
  },
  topCategorySeperator: {
    backgroundColor: "#ecebeb",
    width: "100%",
    height: 1,
  },
});
