import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({name,lastname}) =>{
    return(
        <View>
            <text>Your First Name is {name}! and Last Name is {lastname}</text>
        </View>
    )
}

const MyCustomText = () => {
  return (
    <View style={{alignItems:'Center',top:25,flex:1,justifyContent:'center'}}>
      <MyCustomTextWith name='Chitaworn' lastname='Khirieksathit'/>
      <MyCustomTextWith name='Chonnanut' lastname='Petchyotin'/>
    </View>
  )
}

export default MyCustomText