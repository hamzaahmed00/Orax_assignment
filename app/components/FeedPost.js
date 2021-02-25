import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { NavigationContainer } from "@react-navigation/native";

function FeedPost({ userId, title, body, navigation }) {
  async function fetchData() {
    axios
      .get("https://reqres.in/api/users/" + userId)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      {profileData && (
        <View style={styles.profileHeader}>
          <View style={styles.userDetailsContainer}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Profile", { userId: userId })}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.img}
                    source={{ uri: profileData.avatar }}
                  />
                </View>
                <View style={{ marginLeft: 15 }}>
                  <Text style={styles.name}>
                    {profileData.first_name + " " + profileData.last_name}
                  </Text>
                  <Text style={styles.time}>20 Minutes Ago</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <MaterialCommunityIcons
              color={colors.medium}
              name="dots-horizontal"
              size={30}
            />
          </View>
        </View>
      )}
      <View style={{ flexDirection: "row" }}>
        <View style={styles.iconView}>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <MaterialCommunityIcons
              color={colors.medium}
              name="message-outline"
              size={40}
            />
            <Text
              style={{
                color: colors.medium,
                fontSize: 15,
              }}
            >
              254
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={40}
              color="red"
            />
            <Text
              style={{
                color: colors.medium,
                fontSize: 15,
              }}
            >
              254
            </Text>
          </View>
        </View>
        <View style={styles.contentView}>
          <Text style={{ fontSize: 18, marginLeft: 5 }}>{title}</Text>
          <View
            style={{
              width: "100%",
              aspectRatio: 1.2,
              marginTop: 30,
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "red",
            }}
          >
            <Image
              style={styles.img}
              source={{
                uri:
                  "https://picsum.photos/id/" +
                  Math.round(Math.random() * 100) +
                  "/300",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: { marginHorizontal: 30 },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: { margin: 20 },
  userDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  imgContainer: {
    width: 50,
    flexDirection: "row",
    aspectRatio: 1,
    borderRadius: 25,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
    marginTop: 30,
  },
});

export default FeedPost;
