import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardTabNav from './DashboardTabNav'
import GetInfo from './GetInfo'
import SplashScreen from './SplashScreen'
import FindDonor from './actions/FindDonor'
import { NavigationContainer } from '@react-navigation/native'
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ViewProfile from './Screen 2/ViewProfile'
import ChangeLocation from './Screen 2/ChangeLocation'
import MapBySearch from './Screen 2/MapBySearch'
import MapById from './Screen 2/MapById'

const Stack = createNativeStackNavigator()
const db = getFirestore();
const auth = getAuth();

const App = () => {
  const [initializing, setInitializing] = useState('-1')

  const getExist = async () => {
    const docRef = doc(db, "userProfile", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const data=docSnap.data()
      try {
        await AsyncStorage.setItem('fullName', data['fullName'])
        await AsyncStorage.setItem('age', data['age'])
        await AsyncStorage.setItem('frequency', data['frequency'])
        await AsyncStorage.setItem('location', data['location'])
        await AsyncStorage.setItem('userBlood', data['userBlood'])
        
      } catch (e) {
        console.log(e)
      }
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
        <Stack.Screen name='FindDonor' options={{ headerShown: false }} component={FindDonor} />
        <Stack.Screen name='ViewProfile' options={{ headerShown: false }} component={ViewProfile} />
        <Stack.Screen name='ChangeLocation' options={{ headerShown: false }} component={ChangeLocation} />
        <Stack.Screen name='MapBySearch' options={{ headerShown: false }} component={MapBySearch} />
        <Stack.Screen name='MapById' options={{ headerShown: false }} component={MapById} />
        
      </Stack.Navigator>
    )
  }
  if (initializing == 1) {
    return (
      <Stack.Navigator>
        <Stack.Screen name='DashboardTab' options={{ headerShown: false }} component={DashboardTabNav} />
        <Stack.Screen name='FindDonor' options={{ headerShown: false }} component={FindDonor} />
        <Stack.Screen name='ViewProfile' options={{ headerShown: false }} component={ViewProfile} />
        <Stack.Screen name='ChangeLocation' options={{ headerShown: false }} component={ChangeLocation} />
        <Stack.Screen name='MapBySearch' options={{ headerShown: false }} component={MapBySearch} />
        <Stack.Screen name='MapById' options={{ headerShown: false }} component={MapById} />
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