import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.imgBg}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logoImg}
          />
          <Text style={styles.txtLogoCaption}>UselessStaffApp</Text>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            title="Login"
            onPress={() => {
              console.log("Pressed");
            }}
          />
          <AppButton title="Register" color="secondary" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
  },
  logoImg: {
    width: 80,
    height: 80,
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  txtLogoCaption: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
