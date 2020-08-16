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

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.imgBg}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logoImg}
          />
          <Text>Some text</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.btn, styles.lightBtn]}>
            <Text style={styles.btnTxt}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.darkBtn]}>
            <Text style={styles.btnTxt}>Button 2</Text>
          </TouchableOpacity>
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
  },
  btn: {
    width: "100%",
    padding: 15,
  },
  btnTxt: {
    textAlign: "center",
  },
  lightBtn: {
    backgroundColor: "#fc5c65",
  },
  darkBtn: {
    backgroundColor: "#4ECDC4",
  },
});
