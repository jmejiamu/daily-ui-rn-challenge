import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { Entypo, AntDesign, EvilIcons, FontAwesome } from "@expo/vector-icons";

const dataPic = [
  {
    id: 1,
    image: "https://picsum.photos/600/600",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/600",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/600",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/600",
  },
];

export const SocialShareScreen = () => {
  const { width } = useWindowDimensions();
  const marginHorizontal = 15;
  const imageWidth = width - 2 * marginHorizontal;
  return (
    <SafeAreaView>
      <View style={styles.headerConatiner}>
        <GoBackArrow styleContainer={{ marginHorizontal: 0 }} />
        <Text style={styles.headerTtitle}>Social Net</Text>
        <Entypo name="dots-two-horizontal" size={24} color="black" />
      </View>
      <View style={{}}>
        <FlatList
          data={dataPic}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: imageWidth,
                    height: 600,
                    borderRadius: 20,
                    marginHorizontal: marginHorizontal,
                  }}
                />
                <View
                  style={{
                    marginHorizontal: 15,
                    marginVertical: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="delete" size={24} color="black" />
                  <AntDesign name="hearto" size={24} color="black" />
                  <FontAwesome name="comment-o" size={24} color="black" />
                  <AntDesign name="sharealt" size={24} color="black" />
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTtitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  headerConatiner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
});
