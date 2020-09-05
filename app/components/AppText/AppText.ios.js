import React from "react";
import { StyleSheet, Text } from "react-native";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
});
