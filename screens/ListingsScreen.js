import React from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listing = [
  {
    id: 1,
    title: "Jacket for sale",
    price: 100,
    image: "../assets/jacket.jpg",
  },
  {
    id: 2,
    title: "Chair for sale",
    price: 500,
    Image: "../assets/chair.jpg",
  },
];
function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
