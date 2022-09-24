import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GetGroup from './Screen 2/GetGroup'
import GetProfile from './Screen 2/GetProfile'
const Stack = createNativeStackNavigator()
const GetInfo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='GetGroup' options={{ headerShown: false }} component={GetGroup} />
      <Stack.Screen name='GetProfile' options={{ headerShown: false }} component={GetProfile} />
    </Stack.Navigator>
  )
}


export default GetInfo