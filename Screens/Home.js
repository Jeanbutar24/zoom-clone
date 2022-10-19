import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import MenuIcon from "./Components/MenuIcon";
import Searchbar from "./Components/Searchbar";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header title="Meet & Chat" />
        <Searchbar />
        <MenuIcon navigation={navigation} />
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
    paddingTop: 10,
    flex: 1,
  },

  wrapper: {
    backgroundColor: "#1c1c1c",
    height: "100%",
  },
});
