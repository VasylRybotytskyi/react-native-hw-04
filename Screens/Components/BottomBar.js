import { View, StyleSheet } from "react-native";
import Add from "./Add";
import Tool from "./Tool";
import User from "./User";

export const BottomBar = () => {
  return (
    <View style={styles.iconsContainer}>
      <Tool />
      <Add />
      <User />
    </View>
  );
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 93,
    paddingBottom: 42,
    paddingTop: 9,
    borderTopWidth: 1,
  },
});
