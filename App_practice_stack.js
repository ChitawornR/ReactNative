import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import HomeScreen from './Screen/HomeScreen'
// import DetailsScreen from './Screen/DetailsScreen'
import FirstPage from './page/FirstPage'
import SecondPage from './page/SecondPage'
import ThirdPage from  './page/ThirdPage'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='first'
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
            name='first' 
            componant={FirstPage}
            options={{title:'overview'}}
            />
            <Stack.Screen 
            name='second'
            componant={SecondPage}
            options={{title:'overview'}}
            />
            <Stack.Screen 
            name='third'
            componant={ThirdPage}
            options={{title:'overview'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

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
    