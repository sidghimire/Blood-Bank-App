import { LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import Welcome from './src/Screen 1/Welcome'
import Login from './src/Screen 1/Login'
import Signup from './src/Screen 1/Signup'
import LoggedIn from './src/LoggedIn'
import SplashScreen from './src/SplashScreen'
import './firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const auth = getAuth()
const App = () => {
  LogBox.ignoreAllLogs();//Ignore all log notifications


  const [initializing, setInitializing] = useState(-1)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setInitializing(1)
    } else {
      setInitializing(0)
    }
  })
  if (initializing == -1) {
    return (
      <SplashScreen/>
    )
  }
  if (initializing == 1) {
    return (
      <LoggedIn/>
    )
  }
  if (initializing == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' options={{ headerShown: false }} component={Welcome} />
          <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
          <Stack.Screen name='Signup' options={{ headerShown: false }} component={Signup} />
          <Stack.Screen name='LoggedIn' options={{ headerShown: false }} component={LoggedIn} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App