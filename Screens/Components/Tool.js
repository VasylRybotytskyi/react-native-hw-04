import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Tool = () => {
  return (
    <View style={styles.tool}>
      <Feather name="grid" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  tool: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tool;
