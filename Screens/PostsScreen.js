import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomBar } from "./Components/BottomBar";
// import { CreatePostsScreen } from "./CreatePostsScreen";

const Tabs = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

// const Tabs = createBottomTabNavigator();

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <Ionicons
          style={styles.logout}
          name="exit-outline"
          size={24}
          color="rgba(189, 189, 189, 1)"
        />
      </View>
      {/* <Tabs.Navigator>
        <Tabs.Screen name="add" component={CreatePostsScreen} />
        <Tabs.Screen name="user" component={BottomBar} />
      </Tabs.Navigator> */}
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
  },
  header: {
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 55,
    paddingBottom: 11,
    borderBottomWidth: 1,
    width: windowWidth,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  logout: {
    position: "absolute",
    right: 10,
    bottom: 12,
  },
});
