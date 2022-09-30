import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDocs, query, where, getFirestore, getDoc } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
const db = getFirestore()

const Location = ({navigation}) => {
  const [origin, setOrigin] = useState({ latitude: 27.648272, longitude: 85.375904 })
  const [userData, setUserData] = useState([])
  const getLocation = async () => {
    const lat = await AsyncStorage.getItem('latitude')
    const lang = await AsyncStorage.getItem('longitude')
    const data = { latitude: parseFloat(lat), longitude: parseFloat(lang) }
    setOrigin(data)
  }

  const getSurrounding = async () => {
    const profileRef = collection(db, "userProfile")
    const querySnapshot = await getDocs(profileRef)
    const data = []
    querySnapshot.forEach((doc) => {
      const { age, frequency, fullName, location, userBlood, latitude, longitude } = doc.data()
      data.push({
        id: doc.id,
        age: age,
        frequency: frequency,
        fullname: fullName,
        location: location,
        userBlood: userBlood,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      })

    })
    setUserData(data)
  }
  useEffect(() => {
    getLocation()
    getSurrounding()

  }, [])
  return (
    <View className="flex-1 bg-white">
      <MapView className="w-full h-full"
        initialRegion={
          {
            latitude: parseFloat(origin.latitude),
            longitude: parseFloat(origin.longitude),
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }
        }>

        

        {userData.map((user)=>(
          <Marker onPress={()=>navigation.navigate("ViewProfile",{id:user.id})} coordinate={{latitude: user.latitude, longitude: user.longitude }} />
        ))}
        <Marker coordinate={origin} pinColor={'#0042F7'} />

      </MapView>
    </View>
  )
}

export default Location