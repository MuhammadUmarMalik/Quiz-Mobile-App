import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screen importing and navigate it

import Splash from "../screens/Splash";
import Main from "../screens/Main";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
        <Stack.Screen name="Main" component={Main}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };

const styles = StyleSheet.create({});
