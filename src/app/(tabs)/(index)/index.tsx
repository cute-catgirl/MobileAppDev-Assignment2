import articles from "@/data/articles";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.homeTab}>
          <Text style={{ color: "#36c" }}>Community</Text>
          <View style={styles.tabBar}></View>
        </View>
        <View style={styles.homeTab}>
          <Text>For you</Text>
          <View style={[styles.tabBar, { backgroundColor: "white" }]}></View>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Content and resources selected by and about the Wikimedia community
        </Text>
      </View>

      <Text style={styles.date}>Today - Oct 08, 2026</Text>
      <Text style={styles.sectionTitle}>Featured article</Text>
      <Text style={styles.subtitle}>
        Featured articles are some of the highest-quality articles on Wikipedia,
        selected daily by editors
      </Text>

      <ImageBackground
        source={articles["dummy"].image}
        style={styles.card}
        imageStyle={{ borderRadius: 24 }}
      >
        <View style={styles.cardTextBox}>
          <Text style={styles.cardTitle}>{articles["dummy"].title}</Text>
          <Text style={styles.subtitle}>{articles["dummy"].description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  header: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  wordmark: {
    fontFamily: "serif",
    fontSize: 34,
    color: "#202122",
  },
  wordmarkSmall: {
    fontSize: 26,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  streak: {
    paddingHorizontal: 6,
    borderWidth: 2,
    borderColor: "#202122",
    borderRadius: 6,
    fontWeight: "700",
  },
  tabContainer: {
    paddingTop: 15,
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#eafcf0",
    borderBottomWidth: 1,
  },
  homeTab: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    height: 3,
    width: "auto",
    marginTop: 8,
    backgroundColor: "#36c",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoBox: {
    width: "auto",
    marginTop: 16,
    padding: 24,
    borderRadius: 25,
    backgroundColor: "#eaecf0",
  },
  infoText: {
    color: "#54595d",
    fontSize: 18,
  },
  date: {
    marginTop: 24,
    fontWeight: "600",
    color: "#54595d",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: "600",
    color: "#202122",
  },
  subtitle: {
    color: "#54595d",
  },
  card: {
    width: "auto",
    height: 300,
    marginVertical: 16,
    justifyContent: "flex-end",
    padding: 16,
  },
  cardTextBox: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f8f9fa",
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: "serif",
  },
});
