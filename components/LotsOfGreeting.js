import { View, Text } from 'react-native'
import React from 'react'

const Greeting = (props) =>{
    return(
        <View>
            <Text>Hello {props.name}</Text>
        </View>
    )
}

const LotsOfGreeting = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
      <Greeting name='Marry Christmas'/>
      <Greeting name='Songkran Festival'/>
      <Greeting name='Happy New Year'/>
    </View>
  )
}

export default LotsOfGreeting