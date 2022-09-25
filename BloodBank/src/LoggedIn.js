import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './Screen 2/Dashboard'
import DashboardTabNav from './DashboardTabNav'
import GetInfo from './GetInfo'
import SplashScreen from './SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'

const Stack = createNativeStackNavigator()
const db = getFirestore();
const auth = getAuth();

const App = () => {
  const [initializing, setInitializing] = useState('-1')
  const getExist = async () => {
    const docRef = doc(db, "userProfile", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {

      setInitializing(1)
    } else {
      setInitializing(0)
    }
  }
  useEffect(() => {
    getExist()
  }, [])

  if (initializing == -1) {
    return (<SplashScreen />)
  }
  if (initializing == 0) {
    return (
      <Stack.Navigator>
          <Stack.Screen name='GetInfo' options={{ headerShown: false }} component={GetInfo} />
          <Stack.Screen name='DashboardTab' options={{ headerShown: false }} component={DashboardTabNav} />
      </Stack.Navigator>
    )
  }
  if (initializing == 1) {
    return (
      <Stack.Navigator>
        <Stack.Screen name='DashboardTab' options={{ headerShown: false }} component={DashboardTabNav} />
      </Stack.Navigator>
    )
  }



}

const LoggedIn = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Startup' options={{ headerShown: false }} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoggedIn