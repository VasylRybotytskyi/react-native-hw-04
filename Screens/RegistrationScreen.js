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
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import InputPassword from "../components/InputPassword";
import InputDefault from "../components/InputDefault";
import { useNavigation } from "@react-navigation/native";

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
        <ImageBackground
          source={require("../assets/images/photoBg.png")}
          style={styles.imageBackground}
        >
          <View style={styles.contentContainer}>
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
            <TouchableOpacity style={styles.buttonContainer}>
              <Button
                title="Зареєструватися"
                buttonStyle={styles.button}
                onPress={register}
              />
            </TouchableOpacity>
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
        </ImageBackground>
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
    alignItems: "center",
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
