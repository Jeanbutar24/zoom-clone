import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
