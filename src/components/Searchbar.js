import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
const Searchbar = ({ fetchWeatherData }) => {
  const [yourCity, setYourCity] = useState();
  return (
    <View style={style.Searchbar}>
      <TextInput
        placeholder="Enter your city "
        value={yourCity}
        onChangeText={(text) => {
          setYourCity(text);
        }}
      />
      <EvilIcons
        name="search"
        size={24}
        color="black"
        onPress={() => {
          fetchWeatherData(yourCity);
        }}
      />
    </View>
  );
};

export default Searchbar;

const style = StyleSheet.create({
  Searchbar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 10,
    marginVertical: 30,
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
});
