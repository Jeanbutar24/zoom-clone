import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
const Header = ({ type, title, navigation }) => {
  const handlePress = () => {
    if (type === "Room") navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Entypo
        color={"#ffff"}
        name="notification"
        size={30}
        onPress={handlePress}
      />
      <Text style={styles.heading}>{title}</Text>
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
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    color: "#efefef",
    fontWeight: "bold",
  },
});
