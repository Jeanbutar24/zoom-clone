import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo color={"#ffff"} name="notification" size={30} />
      <Text style={styles.heading}>Meet & Chat</Text>
      <Entypo color={"#ffff"} name="new-message" size={30} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: "#efefef",
    fontWeight: "bold",
  },
});
