import { View } from "react-native";
import { PostsScreen } from "./PostsScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Add from "./Components/Add";
// import User from "./Components/User";
// import Tool from "./Components/Tool";
// import { NavigationContainer } from "@react-navigation/native";

// const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <View>
      <PostsScreen />
    </View>

    // <Tabs.Navigator>
    //   <Tabs.Screen name="add" component={Add} />
    //   <Tabs.Screen name="user" component={User} />
    //   <Tabs.Screen name="tool" component={Tool} />
    // </Tabs.Navigator>
  );
};
export default Home;
