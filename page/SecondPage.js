import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Second Page</Text>
      <Button
       title='Go BACK'
       onPress={()=>navigation.goBack()}
      />
      <Button
       title='Go TO SECOND PAGE...AGAIN'
       onPress={()=>navigation.push('second')}
      />
      <Button
       title='Go TO FIRST PAGE'
       onPress={()=>navigation.navigate('first')}
      />
      <Button
       title='Go TO THIRD PAGE'
       onPress={()=>navigation.navigate('third')}
      />
    </View>
  )
}

export default SecondPage

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