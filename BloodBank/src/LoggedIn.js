import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './Screen 2/Dashboard'
import GetInfo from './GetInfo'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='GetInfo' options={{ headerShown: false }} component={GetInfo} />
        <Stack.Screen name='Dashboard' options={{ headerShown: false }} component={Dashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App