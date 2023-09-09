import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";

const Recap = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const callAlert = () => {
    alert("email: " + email + "\n" + "password: " + password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
        }}
        placeholder="Password"
      />
      <Button
        style={styles.submitButton}
        title="SUBMIT"
        onPress={() => {
          callAlert();
        }}
      />
    </View>
  );
};

export default Recap;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
