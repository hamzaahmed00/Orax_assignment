import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import ListItemSeparator from "../../components/ListItemSeparator";
import FeedPost from "../../components/FeedPost";

function ExploreScreen({ navigation }) {
  async function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Screen>
      <View style={styles.header}>
        <MaterialCommunityIcons name="chevron-left" size={40} />
        <Text style={styles.headerText}>Explore</Text>
        <MaterialCommunityIcons name="magnify" size={40} />
      </View>
      <ListItemSeparator />
      <FlatList
        data={postData}
        keyExtractor={(item) => String(item.id).toString()}
        renderItem={({ item }) => (
          <FeedPost
            title={item.title}
            userId={item.userId}
            navigation={navigation}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ExploreScreen;
