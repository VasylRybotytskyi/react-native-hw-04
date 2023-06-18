import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Add = () => {
  return (
    <View style={styles.buttonAdd}>
      <Ionicons name="ios-add-outline" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonAdd: {
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});

export default Add;
