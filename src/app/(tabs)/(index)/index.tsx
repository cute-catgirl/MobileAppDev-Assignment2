import articles from "@/data/articles";
import Ionicons from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={[styles.homeTab, { borderBottomWidth: 3 }]}>
          <Text style={{ color: "#36c" }}>Community</Text>
          <View style={styles.tabBar}></View>
        </View>
        <View style={styles.homeTab}>
          <Text>For you</Text>
          <View style={[styles.tabBar, { backgroundColor: "white" }]}></View>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={styles.languageContainer}>
          <View style={styles.language}>
            <Text
              style={{ fontSize: 10, fontWeight: "bold", color: "#ffffff" }}
            >
              EN
            </Text>
          </View>
          <Ionicons name="chevron-down" size={16} />
        </View>
      </View>

      <View style={styles.infoBox}>
        <View>
          <Text style={styles.infoText}>
            Content and resources selected by and about the Wikimedia community
          </Text>
        </View>
        <Image
          style={styles.infoImage}
          source={require("@/assets/images/wikipedia-logo.svg")}
          contentFit="contain"
        ></Image>
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
    width: "100%",
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "#eafcf0",
    gap: 16,
  },
  homeTab: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#36c",
  },
  tabBar: {
    height: 3,
    width: "100%",
    marginTop: 4,
    //backgroundColor: "#36c",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoBox: {
    width: "100%",
    marginTop: 16,
    padding: 16,
    borderRadius: 25,
    backgroundColor: "#eaecf0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  infoText: {
    color: "#54595d",
    fontSize: 16,
    flex: 1,
    marginLeft: 48,
    textAlignVertical: "center",
  },
  infoImage: {
    width: 50,
    height: 50,
    flexShrink: 0,
    marginRight: 48,
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
    width: "100%",
    flex: 1,
    marginVertical: 16,
    justifyContent: "flex-end",
  },
  cardTextBox: {
    padding: 16,
    margin: 16,
    borderRadius: 16,
    backgroundColor: "#f8f9fa",
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: "serif",
  },
  language: {
    borderRadius: 4,
    width: 22,
    height: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404244",
  },
  languageContainer: {
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#404244",
    width: 44,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
