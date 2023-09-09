import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DisplayAndImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo}
        source={require('../assets/react_logo.png')} 
      />
      <Image
        style={styles.tinyLogo}
        source={{uri:'http://reactnative.dev/img/tiny_logo.png'}}
      />
    </View>
  );
};

export default DisplayAndImage;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },

  logo: {
    width: 66,
    height: 58,
  },
});
