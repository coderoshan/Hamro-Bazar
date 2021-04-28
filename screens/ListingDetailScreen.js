import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../assets/config/colors";
import ListItem from "../components/ListItem";
//import Text from "../components/AppText";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Black Jacket For Sale</Text>
        <Text style={styles.price}>$50</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/chair.jpg")}
          title="Roshan Kaphle"
          subTitle="4 Listing"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    //marginVertical: 40,
  },
});

export default ListingDetailScreen;
