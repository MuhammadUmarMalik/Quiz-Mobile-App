import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Main");
  }, 5000);
  return (
    <View style={style.container}>
      <Text style={style.logo}>QUIZ APP</Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C47",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 34,

    color: "#000",
    fontWeight: "bold",
  },
});
