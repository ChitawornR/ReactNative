import { View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({route,navigation}) => {

  const {itemID} = route.params;

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
                HomeScreen
            </Text>
            <Text>Initial param : itemID - {itemID}{'\n'}</Text>
            <Button
             title='Go to Details'
             onPress={()=>navigation.navigate('Details')}
            />
            <Text>{'\n'}</Text>
            <Button
             title='Update Param'
             onPress={()=>navigation.setParams({
              itemID: Math.floor(Math.random()*100)
             })}
            />
        </View>
  )
}

export default HomeScreen