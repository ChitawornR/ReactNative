import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FirstPage from './page/FirstPage'
import SecondPage from './page/SecondPage'


function FirstDrawer(){
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: '#FFC0CB'
            }
         }}
        >
            <Stack.Screen name= 'FirstDrawer' component={FirstPage} options={{title: 'First Page'}}/>
        </Stack.Navigator>
      )
}

function SecondDrawer(){
    return(
        <Stack.Navigator
         screenOptions={{
            headerStyle:{
                backgroundColor: '#FFC0CB'
            }
         }}
        
        >
            <Stack.Screen name= 'SecondDrawer' component={SecondPage} options={{title: 'Second Page'}}/>
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer(){
    return(
        <Drawer.Navigator
            screenOptions={{
              drawerStyle:{
                backgroundColor: '#f0f8ff',
                width: 240,
              },
            }}
        >
            <Drawer.Screen name='FirstDrawer' component={FirstDrawer} options={{drawerLabel: 'First Page Option'}}/>
            <Drawer.Screen name='SecondDrawer' component={SecondDrawer} options={{drawerLabel: 'Second Page'}}/>
        </Drawer.Navigator>
    )
}
 
const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>

  )
}

export default App