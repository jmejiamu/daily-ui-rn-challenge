import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { GoBackArrow } from "../../components/GoBackArrow";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
const topSogns = [
  {
    projectIcon: "🥶",
    title: "Cold Face",
    description: "Description",
  },
  {
    projectIcon: "🔥",
    title: "On fire",
    description: "Description",
  },
  {
    projectIcon: "🍦",
    title: "Ice Cream",
    description: "Description",
  },
  {
    projectIcon: "🍔",
    title: "Burger",
    description: "Description",
  },
  {
    projectIcon: "🍟",
    title: "Fries",
    description: "Description",
  },
  {
    projectIcon: "🍕",
    title: "Pizza",
    description: "Description",
  },
  {
    projectIcon: "🍿",
    title: "Popcorn",
    description: "Description",
  },
];

export const MusicPlayerScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: "#010205",
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
      <View>
        <View style={styles.goBackContainer}>
          <GoBackArrow color="white" />
        </View>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/music.jpg")}
        />
        <LinearGradient
          colors={["transparent", "rgba(1,2,5,0.9)"]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.mainContainerStyle}>
        <Text style={styles.artistName}>Blanka Sofia</Text>
        <Text style={styles.songNameStyle}>Let it be</Text>
        <Text style={styles.topSongStyle}>Top Songs</Text>
        <View>
          <FlatList
            horizontal
            data={topSogns}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.topSongContainer,
                  {
                    marginLeft: index === 0 ? 0 : 10, // Remove margin left for first item
                    marginRight: index === topSogns.length - 1 ? 0 : 10, // Remove margin right for last item
                  },
                ]}
              >
                <Text style={styles.songNameStyle}>{item.projectIcon}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="heart" size={24} color="#6C63FF" />
          <Octicons name="download" size={24} color="#fff" />
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={24}
            color="#fff"
          />
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
        </View>
        <View style={styles.playMainContainer}>
          <MaterialCommunityIcons
            name="shuffle-variant"
            size={24}
            color="#fff"
          />
          <AntDesign name="stepbackward" size={24} color="#fff" />

          <TouchableOpacity style={styles.playIconBckground}>
            <AntDesign name="caretright" size={24} color="#fff" />
          </TouchableOpacity>
          <AntDesign name="stepforward" size={24} color="#fff" />
          <MaterialIcons name="queue-music" size={24} color="#fff" />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  playIconBckground: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 30,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12%",
  },
  topSongContainer: {
    backgroundColor: "#2b2e3b",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  playMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2b2e3b",
    padding: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 40,
    height: "20%",
    marginTop: "12%",
  },
  topSongStyle: {
    color: "#fff",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "800",
  },
  songNameStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  artistName: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  mainContainerStyle: {
    backgroundColor: "#1c1f26",
    flex: 1,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    padding: 20,
  },
  gradient: {
    height: 400,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  imgStyle: {
    height: 400,
    width: "100%",
  },
  goBackContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    zIndex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#010205",
  },
});
