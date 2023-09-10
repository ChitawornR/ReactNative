import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Third Page of the App</Text>
      <Button
       title='Go BACK'
       onPress={()=>navigation.goBack()}
      />
      <Button
       title='Go TO SECOND PAGE'
       onPress={()=>navigation.navigate('Second')}
      />
      <Button
       title='Go NAVIGATE TO FIRST PAGE'
       onPress={()=>navigation.navigate('First')}
      />
    </View>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
});