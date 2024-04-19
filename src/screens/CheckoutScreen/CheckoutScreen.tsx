import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { AntDesign } from "@expo/vector-icons";
import { Cart, Item, ProductDetails } from "../../components/Cart/Cart";
import { CustomButton } from "../../components";

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
  {
    productIcon: "🍔",
    title: "Burger",
    description: "Description",
    price: 12.99,
  },
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
  const [fadeInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
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
        <Animated.View
          style={{
            opacity: fadeInAnim,
            transform: [
              {
                translateY: fadeInAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#f0f0f0",
              justifyContent: "space-between",
              padding: 10,
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <TextInput
              style={{ backgroundColor: "#f0f0f0", padding: 10 }}
              placeholder="Promo code"
            />
            <CustomButton
              text="Apply"
              containerStyle={{
                borderRadius: 10,
                backgroundColor: "#454545",
              }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "700" }}>Subtotal</Text>
            <Text style={{ fontWeight: "700" }}>$45.99</Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              height: StyleSheet.hairlineWidth,
              backgroundColor: "#454545",
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "700" }}>Shipping</Text>
            <Text style={{ fontWeight: "700" }}>$4.99</Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              height: StyleSheet.hairlineWidth,
              backgroundColor: "#454545",
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "700" }}>Total</Text>
            <Text style={{ fontWeight: "700" }}>$50.98</Text>
          </View>
          <View
            style={{
              marginVertical: 15,
              height: StyleSheet.hairlineWidth,
              backgroundColor: "#454545",
            }}
          />
          <CustomButton
            text="Proceed to checkout"
            containerStyle={{
              marginVertical: 15,
              backgroundColor: "#454545",
            }}
          />
        </Animated.View>
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
