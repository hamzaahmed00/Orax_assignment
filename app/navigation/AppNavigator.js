import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore/ExploreScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator mode="card" headerMode="none">
    <Stack.Screen name="Feed" component={ExploreScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
