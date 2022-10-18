import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    color: "#FD841F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "New join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Join",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

const MenuIcon = () => {
  return (
    <View style={styles.container}>
      {items.map((items) => (
        <View style={styles.buttonContainer} key={items.id}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: items.color ? items.color : "#0470dc",
            }}
          >
            <FontAwesome color={"#efefef"} size={23} name={items.name} />
          </TouchableOpacity>
          <Text style={styles.menuText}>{items.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  menuText: {
    color: "#858585",
    fontSize: 13,
    paddingTop: 10,
  },
  button: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});
