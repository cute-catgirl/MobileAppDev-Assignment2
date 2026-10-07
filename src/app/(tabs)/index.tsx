import { Text, Image, View, StyleSheet } from "react-native";
import articles from "@/data/articles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>Example of getting article info:</Text>
      <Text>title: {articles[0].title}</Text>
      <Text>description: {articles[0].description}</Text>
      <Text>Image:</Text>
      <View >
        <Image source={articles[0].image} style={{width:300, height:160}} />
      </View>
      <Text>content: {articles[0].content}</Text>
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
