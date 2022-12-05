import { StyleSheet, Text, View } from "react-native";
import { Login } from "./Screens/Pages";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9ECF4",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
