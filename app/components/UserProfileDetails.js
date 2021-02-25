import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function UserProfileDetails({ name, picture }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: picture }} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>This is random Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 27,
    borderWidth: 2,
    borderColor: "#666666",
  },
  description: {
    color: "#666666",
    letterSpacing: 0,
    fontSize: 15,
  },
});

export default UserProfileDetails;
