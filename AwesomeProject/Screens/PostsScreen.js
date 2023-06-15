import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану
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
      <View style={styles.iconsContainer}>
        <View style={styles.tool}>
          <Feather name="grid" size={24} color="black" />
        </View>
        <View style={styles.buttonAdd}>
          <Ionicons name="ios-add-outline" size={24} color="white" />
        </View>
        <View style={styles.user}>
          <Feather name="user" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 93,
    paddingBottom: 42,
    paddingTop: 9,
    borderTopWidth: 1,
  },
  buttonAdd: {
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  tool: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
