import { View, Text } from 'react-native'
import React from 'react'
import Welcome from './src/Screen 1/Welcome'
import Login from './src/Screen 1/Login'
import Signup from './src/Screen 1/Signup'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' options={{headerShown:false}} component={Welcome}/>
        <Stack.Screen name='Login' options={{headerShown:false}} component={Login}/>
        <Stack.Screen name='Signup' options={{headerShown:false}} component={Signup}/>
        <Stack.Screen name='LoggedIn' options={{headerShown:false}} component={LoggedIn}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App