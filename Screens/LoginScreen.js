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
import BgImage from "../components/BgImage";
import InputDefault from "../components/InputDefault";
import InputPassword from "../components/InputPassword";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width; // Для ширини екрану
const windowHeight = Dimensions.get("window").height; // Для висоти екрану

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState("");
  const { navigate } = useNavigation();
  // const dispatch = useDispatch();

  const signIn = () => {
    console.debug("SingIn!");
    console.debug("Email:", email);
    console.debug("Password:", password);
    navigation.navigate("Home");
  };

  const handleActive = (focus, name) => {
    if (focus === "onFocus") {
      name === "email"
        ? setNameActiveInput("email")
        : setNameActiveInput("password");
      return isSetShowKeyboard(true);
    }
    if (focus === "onBlur") {
      setNameActiveInput("");
      isSetShowKeyboard(false);
    }
  };

  const handleUseKeyboard = () => {
    isSetShowKeyboard(false);
    Keyboard.dismiss();
  };

  // const handleSubmit = () => {
  //   if (email === '' || password === '') {
  //     return;
  //   }
  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <BgImage>
          <View
            style={{
              ...styles.contentContainer,
              paddingBottom: isShowKeyboard
                ? Platform.OS == "ios"
                  ? 260
                  : 32
                : 110,
            }}
          >
            <Text style={styles.title}>Увійти</Text>
            <InputDefault
              nameActiveInput={nameActiveInput}
              placeholder="Адреса електронної пошти"
              setChange={setEmail}
              handleActive={handleActive}
              name="email"
              value={email}
            />
            <InputPassword
              nameActiveInput={nameActiveInput}
              setPassword={setPassword}
              password={password}
              handleActive={handleActive}
            />
            <TouchableOpacity style={styles.buttonContainer}>
              <Button
                title="Увійти"
                buttonStyle={styles.button}
                onPress={signIn}
              />
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Немає акаунту?</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={[styles.registerText, styles.registerLink]}
                  onPress={() => navigation.navigate("RegistrationScreen")}
                >
                  Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BgImage>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 16,
  },

  buttonContainer: {
    width: "100%",
    marginBottom: 16,
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

export default LoginScreen;
