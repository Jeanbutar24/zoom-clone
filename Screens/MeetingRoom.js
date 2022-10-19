import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DismisKeyboard from "./Components/DismisKeyboard";
import Header from "./Components/Header";

const MeetingRoom = ({ navigation }) => {
  const [name, setName] = useState({
    name: "",
    roomId: "",
  });
  const handleChangeName = (e) => {
    setName({
      ...name,
      name: e,
    });
  };
  const handleChangeRoomId = (e) => {
    setName({
      ...name,
      roomId: e,
    });
  };
  return (
    <DismisKeyboard>
      <View style={styles.container}>
        <Header title="Meeting Room" navigation={navigation} type="Room" />
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <TextInput
              style={styles.input}
              value={name.name}
              onChangeText={handleChangeName}
              placeholder="Set Your Name"
              placeholderTextColor={"#B2B2B2"}
            />
          </View>
          <View style={styles.info}>
            <TextInput
              value={name.roomId}
              style={styles.input}
              placeholder="Enter Your Room ID"
              keyboardType="phone-pad"
              onChangeText={handleChangeRoomId}
              placeholderTextColor={"#B2B2B2"}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 13 }}>
            <TouchableOpacity style={styles.buttonCtr}>
              <Text style={styles.button}>Stared New Meeting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </DismisKeyboard>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    paddingTop: 10,
    flex: 1,
  },

  wrapper: {
    backgroundColor: "#1c1c1c",
    height: "100%",
    marginTop: 40,
  },
  button: {
    color: "#EDEDED ",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonCtr: {
    alignItems: "center",
    width: "86%",
    borderRadius: 10,
    backgroundColor: "#DC5F00",
    padding: 14,
  },
  input: {
    fontSize: 15,
    width: "100%",
    color: "whitesmoke",
  },
  info: {
    flexDirection: "row",
    padding: 10,
    marginTop: 1,
    backgroundColor: "#3C4048",
    justifyContent: "center",
  },
});
