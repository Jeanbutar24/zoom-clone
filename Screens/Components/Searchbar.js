import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
const Searchbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.widget}>
        <Fontisto
          name="search"
          color={"#858585"}
          size={20}
          style={styles.icon}
        />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={"#858585"}
          style={styles.input}
        />
      </View>
    </View>
  );
};
export default Searchbar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  widget: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#333333",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 15,
    width: "100%",
    color: "whitesmoke",
  },
});
