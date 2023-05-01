import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

import { Home } from "./src/screens/Home";

const App = () => {
  return (
    <View style={style.container}>
      <Home />
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
