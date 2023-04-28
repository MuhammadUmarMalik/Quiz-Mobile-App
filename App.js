import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Main } from "./src/screens/Main";
const App = () => {
  return (
    <View style={style.container}>
      <Main />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
