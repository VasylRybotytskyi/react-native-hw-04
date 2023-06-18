import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const User = () => {
  return (
    <View style={styles.user}>
      <Feather name="user" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default User;
