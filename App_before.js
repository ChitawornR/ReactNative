import { View, Text, Button } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen'
import DetailsScreen from './Screen/DetailsScreen'

function HomeScreen({navigation}){
    return(
        <View style={{flex:1,alignItems:'center'}}>
            <Text>
                HomeScreen
            </Text>
            <Button
             title='Go to Details'
             onPress={()=>navigation.navigate('Details')}
            />
        </View>
    )
}

// function DetailScreen(){
//     return(
//         <View style={{flex:1,alignItems:'center'}}>
//             <Text>
//                 DetailScreen
//             </Text>
//         </View>
//     )
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            componant={HomeScreen}
            options={{title:'overview'}}
            />
            <Stack.Screen name='Details' component={{DetailScreen}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App