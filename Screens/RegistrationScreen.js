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
  KeyboardAvoidingView,
} from "react-native";
import { Platform } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import InputPassword from "../components/InputPassword";
import InputDefault from "../components/InputDefault";
import { useNavigation } from "@react-navigation/native";
import BgImage from "../components/BgImage";
import ButtonSubmit from "../components/ButtonSabmit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowKeyboard, isSetShowKeyboard] = useState(false);
  const [nameActiveInput, setNameActiveInput] = useState("");

  const { navigate } = useNavigation();
  // const dispatch = useDispatch();

  const handleActive = (focus, name) => {
    if (focus === "onFocus") {
      name === "login" && setNameActiveInput("login");
      name === "email" && setNameActiveInput("email");
      name === "password" && setNameActiveInput("password");

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

  const register = () => {
    console.debug("Register!");
    console.debug("Login:", login);
    console.debug("Email:", email);
    console.debug("Password:", password);
    // Додати логіку для збереження та використання введених даних
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={handleUseKeyboard}>
      <View style={styles.container}>
        <BgImage>
          <View
            style={{
              ...styles.contentContainer,
              paddingBottom: isShowKeyboard
                ? Platform.OS == "ios"
                  ? 230
                  : 32
                : 45,
            }}
          >
            <View style={styles.image}>
              <AntDesign style={styles.add} name="pluscircleo" size={25} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <InputDefault
              nameActiveInput={nameActiveInput}
              placeholder="Логін"
              setChange={setLogin}
              handleActive={handleActive}
              name="login"
              value={login}
            />
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
            <ButtonSubmit title={"Зареєстуватися"} onSubmit={register} />
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Вже є акаунт?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={[styles.registerText, styles.registerLink]}>
                  Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BgImage>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    width: windowWidth,
    height: windowHeight,
  },
  contentContainer: {
    backgroundColor: "#fff",
    position: "relative",

    width: "100%",
    alignItems: "center",

    paddingTop: 92,
    paddingHorizontal: 16,

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
    marginTop: 16,
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
});
