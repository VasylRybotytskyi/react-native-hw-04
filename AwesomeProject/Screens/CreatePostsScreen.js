import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { AntDesign, EvilIcons, Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану
export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Створити публікацію</Text>
        <AntDesign
          style={styles.arrowLeft}
          name="arrowleft"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Entypo name="camera" size={24} color="black" />
        </View>
        <Text>Завантажте фото</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.buttonAdd}>
          <EvilIcons name="trash" size={24} color="rgba(189, 189, 189, 1)" />
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
  arrowLeft: {
    position: "absolute",
    left: 10,
    bottom: 12,
  },
  iconsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 93,
    paddingBottom: 42,
    paddingTop: 9,
  },
  buttonAdd: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
  content: {
    paddingHorizontal: 16,
  },
  contentImage: {
    backgroundColor: "#F6F6F6",
    height: 240,
    borderRadius: 8,
  },
});
