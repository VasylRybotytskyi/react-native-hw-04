import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signIn = () => {
    console.debug("SingIn!");
    console.debug("Email:", email);
    console.debug("Password:", password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/photoBg.png")}
          style={styles.imageBackground}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Text style={styles.passwordToggleText}>
                  {showPassword ? "Сховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
              <Button
                title="Увійти"
                buttonStyle={styles.button}
                onPress={signIn}
              />
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Немає акаунту?</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={[styles.registerText, styles.registerLink]}>
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  imageBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  contentContainer: {
    display: "flex",
    gap: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 92,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
    alignItems: "center", // Відцентровує горизонтально
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
  },
  registerLink: {
    color: "rgba(27, 67, 113, 1)",
    marginLeft: 5,
  },
  image: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
  },
  add: {
    position: "absolute",
    bottom: 20,
    right: -12,
    color: "rgba(255, 108, 0, 1)",
  },
  passwordInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#F6F6F6",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#F6F6F6",
  },
  passwordToggleText: {
    color: "#1B4371",
    fontWeight: "400",
    fontSize: 16,
  },
});
