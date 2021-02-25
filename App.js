import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileScreen from "./app/screens/profile/ProfileScreen";
import ExploreScreen from "./app/screens/explore/ExploreScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
