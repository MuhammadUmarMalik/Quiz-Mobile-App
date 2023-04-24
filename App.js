import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

// import { SafeAreaView } from "react-native-safe-area-context";
import { AppNavigator } from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <StatusBar
        backgroundColor={"black"}
        barStyle={"dark-content"}
        translucent={false}
      />

      <AppNavigator />
    </>
  );
}
