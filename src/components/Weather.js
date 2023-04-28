import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { haze, rainy, snow, sunny } from "../assets/index";
import Searchbar from "./Searchbar";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Weather = ({ weatherData, fetchWeatherData }) => {
  const [background, setIsBackground] = useState(null);

  const {
    weather,
    name,
    main: { temp, feels_like, temp_min, temp_max },
  } = weatherData;
  const [{ main }] = weather;

  useEffect(() => {
    setIsBackground(getBackgroundImage(main));
  }, [weatherData]);

  // get background dynamically
  function getBackgroundImage(weather) {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "haze") return haze;
    return haze;
  }
  // change text color according to weather
  let textColor = background !== sunny ? "white" : "black";
  return (
    <View style={style.container}>
      <ImageBackground
        source={background}
        style={style.backgroundImg}
        resizeMode="cover"
      >
        <Image S></Image>
        <Searchbar
          style={style.searchbar}
          fetchWeatherData={fetchWeatherData}
        />
      </ImageBackground>
    </View>
  );
};

export default Weather;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
    alignItems: "center",
  },
});
