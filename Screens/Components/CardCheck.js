import React from "react";
import { StyleSheet, View } from "react-native";

const CardCheck = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}></View>
      <View style={styles.right}></View>
    </View>
  );
};

export default CardCheck;

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 99,
  },
});
