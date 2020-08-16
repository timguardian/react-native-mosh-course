import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import styles from "./styles";
export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
