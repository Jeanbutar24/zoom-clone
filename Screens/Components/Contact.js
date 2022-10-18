import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const contactPerson = [
  {
    type: "starred",
    name: "Started",
  },
  {
    type: "profile",
    name: "Siti Nichai",
    photos: require("../../assets/siti.png"),
  },
  {
    type: "profile",
    name: "Jean Susanto",
    photos: require("../../assets/jean.png"),
  },
  {
    type: "profile",
    name: "Jhon Claude",
    photos: require("../../assets/jhon.png"),
  },
  {
    type: "profile",
    name: "Suci Playboong",
    photos: require("../../assets/suci.png"),
  },
  {
    type: "profile",
    name: "Siti Nichai",
    photos: require("../../assets/siti.png"),
  },
  {
    type: "profile",
    name: "Jean Susanto",
    photos: require("../../assets/jean.png"),
  },
  {
    type: "profile",
    name: "Jhon Claude",
    photos: require("../../assets/jhon.png"),
  },
  {
    type: "profile",
    name: "Suci Playboong",
    photos: require("../../assets/suci.png"),
  },
];
const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      {contactPerson.map((data, index) => (
        <View style={styles.row} key={index}>
          {/* image */}
          {data.type === "starred" ? (
            <View style={styles.stredIcon}>
              <AntDesign name="star" color={"whitesmoke"} size={30} />
            </View>
          ) : (
            <View>
              <Image style={styles.image} source={data.photos} />
            </View>
          )}
          {/** Text */}
          <Text style={styles.text}>{data.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  stredIcon: {
    backgroundColor: "#3C4048",
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  text: {
    color: "white",
    fontSize: 17,
    marginLeft: 14,
  },
});
