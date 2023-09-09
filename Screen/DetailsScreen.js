import { View, Text, Button } from 'react-native'
import React from 'react'

const DetailsScreen = ({ route,navigation}) => {
  //get the params
  const {itemID,otherParams} = route.params;

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>
         Detail Screen
        </Text>
        <Text>ItemID: {JSON.stringify(itemID)}</Text>
        <Text>otherParams{JSON.stringify(otherParams)}{'\n'}</Text>
        <Button
         title='Go to Details..Again'
         onPress={()=>
          navigation.push('Details',{
            itemID : Math.floor(Math.random()*100),
            otherParams: 'anything you want here'
          })
         }
        />
        <Button
         title='Go to Home'
         onPress={()=>navigation.navigate('Home')}
        />
        <Button
         title='Go Back'
         onPress={()=>navigation.goBack()}
        />
    </View>
  )
}

export default DetailsScreen