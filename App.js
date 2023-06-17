import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostsScreen } from "./Screens/PostsScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { CommentsScreen } from "./Screens/CommentsScreen";
import { ProfileScreenn } from "./Screens/ProfileScreen";
import { Home } from "./Screens/Home";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Home />
        {/* <PostsScreen /> */}
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        {/* <CreatePostsScreen /> */}
        {/* <CommentsScreen /> */}
        {/* <ProfileScreenn /> */}
      </NavigationContainer>
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
