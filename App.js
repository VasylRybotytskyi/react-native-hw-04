// import React from "react";
// import { StyleSheet, View } from "react-native";
// import { RegistrationScreen } from "./Screens/RegistrationScreen";
// import { LoginScreen } from "./Screens/LoginScreen";
// import { PostsScreen } from "./Screens/PostsScreen";
// // import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
// // import { CommentsScreen } from "./Screens/CommentsScreen";
// // import { ProfileScreen } from "./Screens/ProfileScreen";
// import { Home } from "./Screens/Home";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// // const MainStack = createStackNavigator(); // вказує на групу навігаторів

// export default function App() {
//   return (
//     <View>
//       {/* // <NavigationContainer>
//     //   <MainStack.Navigator initialRouteName="Login">
//     //     <MainStack.Screen name="Registration" component={RegistrationScreen} />
//     //     <MainStack.Screen name="Login" component={LoginScreen} />
//     //     <MainStack.Screen name="Home" component={Home} />
//     //   </MainStack.Navigator> */}
//       {/* <Home /> */}
//       <PostsScreen />
//       {/* <RegistrationScreen /> */}
//       {/* <LoginScreen /> */}
//       {/* <CreatePostsScreen /> */}
//       {/* <CommentsScreen /> */}
//       {/* <ProfileScreenn /> */}
//       {/* </NavigationContainer> */}
//     </View>
//   );
// }

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
