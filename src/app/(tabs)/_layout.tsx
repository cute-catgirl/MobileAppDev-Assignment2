import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#36c",
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Ionicons name="filter" size={20}></Ionicons>
              <Ionicons name="search" size={20}></Ionicons>
              <View style={styles.tabsButton}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>90</Text>
              </View>
              <Ionicons name="notifications" size={20}></Ionicons>
              <Ionicons name="ellipsis-vertical" size={20}></Ionicons>
            </View>
          ),
          headerTitle: "Saved",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={24}
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
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "time" : "time-outline"}
              color={color}
              size={24}
            />
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <View style={styles.tabsButton}>
                <Text style={{ fontSize: 10, fontWeight: "bold" }}>90</Text>
              </View>
              <Ionicons name="notifications" size={20}></Ionicons>
              <Ionicons name="ellipsis-vertical" size={20}></Ionicons>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    height: "100%",
    flexDirection: "row",
    gap: 24,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 16,
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
});
