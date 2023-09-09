import { View, Text, Button, TextInput,StyleSheet } from "react-native";
import React, { useState } from "react";

const Myinput = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Text"
        style={styles.textInputStyle}
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      <Text>
        {"\n\n"}You typed: {text}
      </Text>
      <Text>{'\n\n'}</Text>
      <Button
      title='Reset'
      onPress={()=>{setText('Hello')}}
      />
    </View>
  );
};

export default Myinput;

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
