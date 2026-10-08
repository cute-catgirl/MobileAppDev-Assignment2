import articles from "@/data/articles";
import { ArticleSection } from "@/types";
import { Image, StyleSheet, Text, View } from "react-native";

function Section({ section }: { section: ArticleSection }) {
  if (section.title) {
    return (
      <View>
        <Text style={{ fontSize: 24 }}>{section.title}</Text>
        <Text>{section.content}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  }
}

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>Example of getting article info:</Text>
      <Text>title: {articles[0].title}</Text>
      <Text>description: {articles[0].description}</Text>
      <Text>Image:</Text>
      <View>
        <Image source={articles[0].image} style={{ width: 300, height: 160 }} />
      </View>
      {articles[0].content.map((value, index) => (
        <Section key={index} section={value}></Section>
      ))}
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
