import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { haze, rainy, snow, sunny } from "../assets/index";
import Searchbar from "./Searchbar";
import { AntDesign } from "@expo/vector-icons";

const Weather = ({ weatherData, fetchWeatherData }) => {
  const [background, setIsBackground] = useState(null);

  const {
    weather,
    name,
    wind: { speed },
    main: { temp, humidity, temp_min, temp_max, pressure },
    visibility,
    sys: { country },

    clouds: { all },
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
    if (weather === "Haze") return haze;
    if (weather === "Clouds") return haze;
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
        <Image style={style.logo} source={require("../assets/LOGO.png")} />
        <Searchbar
          style={style.searchbar}
          fetchWeatherData={fetchWeatherData}
        />

        <Text
          style={{
            color: textColor,
            fontSize: 40,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          {name}
        </Text>

        <View
          style={{
            marginTop: 60,
            alignSelf: "flex-start",
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: textColor,
              fontSize: 80,
              fontWeight: "bold",
              textAlign: "left",
              alignSelf: "flex-start",
              marginLeft: 3,
            }}
          >
            {temp}°
          </Text>
          <Text
            style={{
              color: textColor,
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "left",
              alignSelf: "flex-start",
              marginLeft: 5,
            }}
          >
            {main}
          </Text>
        </View>
        <View
          style={{
            alignSelf: "flex-start",
            marginHorizontal: 20,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="arrowup"
              size={24}
              color={background !== sunny ? "white" : "black"}
            />
            <Text
              style={{
                color: textColor,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "left",
                alignSelf: "flex-start",
                marginLeft: 5,
              }}
            >
              {temp_max}°C
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",

              flexDirection: "row",
            }}
          >
            <AntDesign
              name="arrowdown"
              size={24}
              color={background !== sunny ? "white" : "black"}
            />
            <Text
              style={{
                color: textColor,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "left",
                alignSelf: "flex-start",
                marginLeft: 5,
              }}
            >
              {temp_min}°C
            </Text>
          </View>
        </View>
        {/* section for sunset and sunrise */}
        <View style={style.WeatherContainer}>
          <Text
            style={{
              color: textColor,
              fontSize: 26,
              fontWeight: "500",
              textAlign: "left",
              alignSelf: "flex-start",
              marginLeft: 5,
            }}
          >
            Extra Details
          </Text>
          {/* humaditiy section */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ marginTop: 5 }}>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Humidity
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {humidity}
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Pressure
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {pressure}
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Wind
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {speed}
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Country
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {country}
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Visibility
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {visibility}
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "700",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                Clouds
              </Text>
              <Text
                style={{
                  color: textColor,
                  fontSize: 20,
                  fontWeight: "300",
                  textAlign: "left",
                  alignSelf: "flex-start",
                  marginLeft: 5,
                }}
              >
                {all}
              </Text>
            </View>
          </View>
          {/* humaditiy section */}
        </View>
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
    marginTop: 50,
    flexDirection: "row",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
    alignItems: "center",
  },

  WeatherContainer: {
    flex: 0.9,
    backgroundColor: "rgba(255,254,252,0.3)",
    padding: 20,
    width: Dimensions.get("screen").width - 30,
    height: 500,
    borderRadius: 10,

    marginTop: 20,
  },
});
