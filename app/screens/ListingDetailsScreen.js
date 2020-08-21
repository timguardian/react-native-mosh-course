import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen({ title, price, image }) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/jacket.jpg")}
            title="Temirlan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
