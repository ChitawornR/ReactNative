import { View, Text } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Screen/HomeScreen'
import DetailsScreen from './Screen/DetailsScreen'
import Counter from './components/Counter'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
            headerStyle:{
                backgroundColor:'#008b8b'
            },
            headerTintColor:'#ffff',
            headerTitleStyle:{
                fontWeight:'bold',
            }
        }}
        
        >
            <Stack.Screen 
            name='Home'
            component={HomeScreen}
            // options={{title:'overview'}}
            initialParams={{itemID: 42}}
            />
            <Stack.Screen 
            name='Details'
            component={DetailsScreen}
            options={{title:'overview'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App