import { Article } from "@/types";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
export default function ArticleCard({
  article,
  titleStyle,
}: {
  article: Article;
  titleStyle?: StyleProp<TextStyle>;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Text style={titleStyle}>{article.title}</Text>
        <Text style={styles.subtitle}>{article.description}</Text>
      </View>
      <View style={styles.rightSection}>
        <Image source={article.image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 60,
    width: "100%",
    padding: 8,
  },
  leftSection: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 5,
  },
  rightSection: {},
  subtitle: {
    color: "#54595d",
  },
  image: {
    resizeMode: "cover",
    height: 60,
    width: "auto",
    aspectRatio: 1 / 1,
    borderRadius: 8,
  },
});
