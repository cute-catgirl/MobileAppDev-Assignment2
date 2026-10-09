import Ionicons from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Image
              style={styles.wordmark}
              source={require("@/assets/images/wikipedia_wordmark.svg")}
            />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <View style={styles.tabsButton}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>90</Text>
              </View>
              <Ionicons name="notifications" size={20}></Ionicons>
            </View>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="article/[id]"
        options={{
          headerTitle: "",
          headerLeft: () => <></>,
          headerRight: () => (
            <View style={[styles.headerRight, { width: "100%" }]}>
              <Link href="../">
                <Ionicons name="arrow-back" size={20}></Ionicons>
              </Link>
              <View style={styles.searchBox}>
                <Ionicons name="search" size={20} color="#72777d"></Ionicons>
                <TextInput
                  placeholder="Search Wikipedia"
                  style={{ height: "100%" }}
                ></TextInput>
              </View>
              <View style={styles.tabsButton}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>90</Text>
              </View>
              <Ionicons name="notifications" size={20}></Ionicons>
              <Ionicons name="ellipsis-vertical" size={20}></Ionicons>
            </View>
          ),
        }}
      ></Stack.Screen>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerRight: {
    height: "100%",
    flexDirection: "row",
    gap: 24,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 50,
    paddingLeft: 8,
    maxHeight: 34,
  },
  tabsButton: {
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: "#000000",
    width: 22,
    height: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  wordmark: {
    width: 150,
    height: "100%",
    resizeMode: "contain",
    marginLeft: -16,
  },
});
