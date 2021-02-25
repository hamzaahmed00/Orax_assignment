import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Stats({ posts, followers, following }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.main}>{posts}</Text>
        <Text style={styles.title}>Posts</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.main}>{following}</Text>
        <Text style={styles.title}>Following</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.main}>{followers}</Text>
        <Text style={styles.title}>Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#D4D8D8",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default Stats;
