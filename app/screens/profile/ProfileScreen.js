import React, { useEffect, useState } from "react";
import Screen from "../../components/Screen";
import UserProfileDetails from "../../components/UserProfileDetails";
import axios from "axios";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stats from "../../components/Stats";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function ProfileScreen({ navigation, route }) {
  const id = route.params.userId;
  async function fetchData() {
    axios
      .get("https://reqres.in/api/users/" + id)
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=" + id)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [profileData, setProfileData] = useState(null);
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Screen>
      <ScrollView>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Profile</Text>
          <MaterialCommunityIcons name="dots-horizontal" size={40} />
        </View>
        {profileData && (
          <UserProfileDetails
            name={profileData.first_name + " " + profileData.last_name}
            picture={profileData.avatar}
          />
        )}
        <Stats posts={438} following={298} followers="321k" />
        <View style={styles.btnContainer}>
          <AppButton textColor={colors.white} title="Follow" />
          <AppButton
            color={colors.white}
            textColor={colors.black}
            style={{ borderColor: colors.primary, borderWidth: 1 }}
            title="Message"
          />
        </View>
        <View style={styles.photos}>
          <Text style={styles.photoHeading}>Photos</Text>
          <View style={styles.icons}>
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              size={30}
              color={colors.medium}
            />
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={30}
              color={colors.medium}
              style={{ marginLeft: 7 }}
            />
          </View>
        </View>
        <ScrollView
          horizontal={false}
          style={{
            flexWrap: "wrap",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {postData &&
              postData.map((item) => {
                console.log(item);
                return (
                  <>
                    <View
                      style={styles.imageView}
                      key={String(item.id).toString()}
                    >
                      <Image
                        style={styles.img}
                        source={{
                          uri:
                            "https://picsum.photos/id/" +
                            Math.round(Math.random() * 100) +
                            "/200",
                        }}
                      />
                    </View>
                  </>
                );
              })}
          </View>
        </ScrollView>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  icons: { flexDirection: "row", alignItems: "center" },
  photos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  photoHeading: { fontSize: 20, fontWeight: "600" },
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
  follow: {},
  message: { backgroundColor: colors.white, borderColor: colors.primary },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageView: {
    width: "28%",
    aspectRatio: 1,
    margin: 10,
    overflow: "hidden",
    borderRadius: 5,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileScreen;
