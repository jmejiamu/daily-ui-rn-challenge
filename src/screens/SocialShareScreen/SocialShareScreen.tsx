import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Alert,
  Animated,
} from "react-native";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomButton } from "../../components";

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

interface IFriends {
  projectIcon: string;
  title: string;
  description: string;
}

const friendsList: IFriends[] = [
  {
    projectIcon: "😂",
    title: "Picture",
    description: "Description",
  },
  {
    projectIcon: "🤪",
    title: "Picture",
    description: "Description",
  },
  {
    projectIcon: "😘",
    title: "Picture",
    description: "Description",
  },
  {
    projectIcon: "🤗",
    title: "Picture",
    description: "Description",
  },
];

export const SocialShareScreen = () => {
  const { width } = useWindowDimensions();
  const marginHorizontal = 15;
  const imageWidth = width - 2 * marginHorizontal;
  const [isOpen, setIsOpen] = useState(false);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const snapPoints = ["30%"];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <View style={styles.headerConatiner}>
          <GoBackArrow styleContainer={{ marginHorizontal: 0 }} />
          <Text style={styles.headerTtitle}>Social Net</Text>
          <Entypo name="dots-two-horizontal" size={24} color="black" />
        </View>
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
                  <TouchableOpacity onPress={() => setIsOpen(true)}>
                    <AntDesign name="sharealt" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        {isOpen && (
          <GestureHandlerRootView
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <BottomSheetModalProvider>
              <View style={styles.container}>
                <BottomSheet
                  ref={bottomSheetRef}
                  snapPoints={snapPoints}
                  enablePanDownToClose={true}
                  onClose={() => setIsOpen(false)}
                >
                  <BottomSheetView style={styles.contentContainer}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Share it with
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Friends
                    </Text>
                    <View style={{ alignItems: "center" }}>
                      <FlatList
                        data={friendsList}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        renderItem={({ item }) => {
                          return (
                            <TouchableOpacity
                              activeOpacity={0.7}
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginVertical: 15,
                              }}
                              onPress={() => {
                                Alert.alert(
                                  "Share",
                                  `You shared with ${item.title}`,
                                  [
                                    {
                                      text: "OK",
                                      onPress: () => setIsOpen(false),
                                    },
                                  ]
                                );
                              }}
                            >
                              <View
                                style={{
                                  backgroundColor: "#dbdbdb",
                                  marginRight: 10,
                                  width: 60,
                                  height: 60,
                                  borderRadius: 60 / 2,
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Text style={{ fontSize: 30 }}>
                                  {item.projectIcon}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          );
                        }}
                      />
                    </View>
                    <CustomButton
                      text="Cancel"
                      containerStyle={{ marginVertical: 15 }}
                      onPress={() => setIsOpen(false)}
                    />
                  </BottomSheetView>
                </BottomSheet>
              </View>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        )}
      </Animated.View>
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
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "rgba(1,2,5,0.5)",
  },
  contentContainer: {
    flex: 1,
    // alignItems: "center",
    marginHorizontal: 15,
  },
});
