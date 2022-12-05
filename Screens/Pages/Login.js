import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DismisKeyboard } from "../Components";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const disabled = form.username && form.password ? false : true;
  return (
    <DismisKeyboard>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/favicon.png")} style={{ width: 35, height: 35 }} />
          </View>
          <Text style={styles.loginspan}>
            Login to <Text style={styles.span}>manageEmployee</Text>
          </Text>
          <Text>HRIS Mobile Managing</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <View>
              <TextInput
                style={styles.textInput}
                value={form.username}
                onChangeText={(e) => {
                  setForm({
                    ...form,
                    username: e,
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View>
              <TextInput
                style={styles.textInput}
                value={form.password}
                keyboardType={"visible-password"}
                onChangeText={(e) => {
                  setForm({
                    ...form,
                    password: e,
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={{ backgroundColor: disabled ? "#73777B" : "black", ...styles.button }}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
            <Text style={{ fontSize: 14, marginTop: 9 }}>Forgot Password</Text>
          </View>
        </View>
      </View>
    </DismisKeyboard>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "white",
    width: 300,
    padding: 5,
    borderRadius: 6,
    flexDirection: "row-reverse",
  },
  button: {
    width: 100,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  imageContainer: {
    width: 70,
    height: 56,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loginspan: {
    fontSize: 19,
    marginBottom: 5,
  },
  span: {
    color: "#0425D3",
    fontSize: 22,
  },
  top: {
    marginTop: 100,
    alignItems: "center",
  },
  bottom: {
    marginTop: 25,
    alignItems: "center",
  },
  line: {
    backgroundColor: "#979191",
    width: 80,
    height: 2,
    marginTop: 7,
  },
  label: {
    color: "#747171",
    fontSize: 13,
    marginBottom: 3,
  },
  inputContainer: {
    marginBottom: 10,
  },
});
