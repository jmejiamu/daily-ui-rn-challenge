import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { AntDesign } from "@expo/vector-icons";
import { Cart, Item, ProductDetails } from "../../components/Cart/Cart";

const productList: Array<ProductDetails> = [
  {
    productIcon: "🥶",
    title: "Cold Face",
    description: "Description",
    price: 9.99,
  },
  {
    productIcon: "🔥",
    title: "On fire",
    description: "Description",
    price: 10.99,
  },
  {
    productIcon: "🍦",
    title: "Ice Cream",
    description: "Description",
    price: 11.99,
  },
  // {
  //   productIcon: "🍔",
  //   title: "Burger",
  //   description: "Description",
  //   price: 12.99,
  // },
  // {
  //   productIcon: "🍟",
  //   title: "Fries",
  //   description: "Description",
  //   price: 13.99,
  // },
  // {
  //   productIcon: "🍕",
  //   title: "Pizza",
  //   description: "Description",
  //   price: 14.99,
  // },
  // {
  //   productIcon: "🍝",
  //   title: "Spaghetti",
  //   description: "Description",
  //   price: 15.99,
  // },
  // {
  //   productIcon: "🍜",
  //   title: "Ramen",
  //   description: "Description",
  //   price: 16.99,
  // },
  // {
  //   productIcon: "🍣",
  //   title: "Sushi",
  //   description: "Description",
  //   price: 17.99,
  // },
  // {
  //   productIcon: "🍤",
  //   title: "Shrimp",
  //   description: "Description",
  //   price: 18.99,
];

export const CheckoutScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <GoBackArrow />
        <Text style={styles.headerTextStyle}>Cart</Text>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
          style={{ marginHorizontal: 16 }}
        />
      </View>
      <View style={{ marginHorizontal: 16 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productList}
          renderItem={({ item, index }: Item) => (
            <Cart item={item} index={index} />
          )}
          keyExtractor={(item) => String(item.price)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circularButtonStyle: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#454545",
  },
  innerCardContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "900",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
