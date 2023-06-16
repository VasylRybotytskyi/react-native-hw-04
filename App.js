import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { CommentsScreen } from "./Screens/CommentsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PostsScreen /> */}
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <CreatePostsScreen /> */}
      <CommentsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
