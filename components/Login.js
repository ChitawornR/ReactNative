import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const checkTextInput = () => {
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!email.trim()) {
      alert("Please Enter Email");
      return;
    }
    alert('Success')
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Name"
        style={styles.textInputStyle}
        value={name}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <TextInput
        placeholder="Enter Name"
        style={styles.textInputStyle}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <Text>{'\n'}</Text>
      <Button 
        title="SUMMIT"
        onPress={()=>{
            checkTextInput()
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
