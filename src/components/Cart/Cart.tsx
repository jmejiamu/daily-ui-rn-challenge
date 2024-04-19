import React, { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export interface ProductDetails {
  productIcon?: string;
  title?: string;
  description?: string;
  price?: number;
}
export interface Item {
  item: ProductDetails;
  index?: number;
}

export const Cart = ({ item, index }: Item) => {
  const { productIcon, title, description, price } = item;
  const translateX = new Animated.Value(index! % 2 === 0 ? 500 : -500);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Animated.View
      style={[styles.mainContainer, { transform: [{ translateX }] }]}
    >
      <View style={styles.innerCardContainer}>
        <Text style={{ fontSize: 55 }}>{productIcon}</Text>
      </View>
      <View style={styles.itemDescStyle}>
        <Text style={styles.titleProdStyle}>{title}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
        <Text style={styles.footerTextStyle}>${price}</Text>
      </View>
      <View style={styles.addProductStyle}>
        <TouchableOpacity style={styles.circularButtonStyle}>
          <Text style={styles.footerTextStyle}>-</Text>
        </TouchableOpacity>
        <Text style={styles.footerTextStyle}>1</Text>
        <TouchableOpacity
          style={[styles.circularButtonStyle, { backgroundColor: "#454545" }]}
        >
          <Text style={[styles.footerTextStyle, { color: "white" }]}>+</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footerTextStyle: {
    fontWeight: "700",
  },
  descriptionStyle: {
    color: "grey",
    fontWeight: "600",
  },
  titleProdStyle: {
    fontWeight: "900",
    fontSize: 18,
  },
  addProductStyle: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "space-between",
  },
  itemDescStyle: {
    justifyContent: "space-between",
    marginLeft: 20,
    width: "40%",
  },
  mainContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  innerCardContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  circularButtonStyle: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#454545",
  },
});
