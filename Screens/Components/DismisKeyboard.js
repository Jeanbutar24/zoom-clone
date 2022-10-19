import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

const DismisKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismisKeyboard;
