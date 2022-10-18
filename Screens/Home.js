import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import MenuIcon from "./Components/MenuIcon";
import Searchbar from "./Components/Searchbar";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header />
        <Searchbar />
        <MenuIcon />
        <Contact />
      </View>
    </View>
  );
};

export default Home;
////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },

  wrapper: {
    backgroundColor: "#1c1c1c",
    height: "100%",
  },
});
