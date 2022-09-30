import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons';
import { getAuth, signOut } from 'firebase/auth'
import { doc, setDoc, getFirestore, getDoc, updateDoc } from 'firebase/firestore/lite'
import AsyncStorage from '@react-native-async-storage/async-storage';


const auth = getAuth()
const db = getFirestore()



const ChangeLocation = ({navigation}) => {
    const [origin, setOrigin] = useState({ latitude: 27.688671, longitude: 85.335784 })
    const [destination, setDestination] = useState({ latitude: 27.688671, longitude: 85.335784 })
    const saveLocation = async () => {
        const user=auth.currentUser
        await updateDoc(doc(db, 'userProfile', user.uid), {
            latitude: origin.latitude,
            longitude: origin.longitude
        }).then(async(res) => {
            await AsyncStorage.setItem('latitude', (origin.latitude).toString())
            await AsyncStorage.setItem('longitude', (origin.longitude).toString())
            navigation.goBack()
        })

    }


    const getLocation=async()=>{
        const lat=await AsyncStorage.getItem('latitude')
        const lang=await AsyncStorage.getItem('longitude')
        const data={latitude:parseFloat(lat),longitude:parseFloat(lang)}
        setOrigin(data)
    }

    useEffect(() => {
      getLocation()

    }, [])
    
    return (
        <View className="flex-1 bg-white">
            <TouchableOpacity activeOpacity={0.9} className="absolute top-0 right-0 px-5 py-3 m-7 rounded-full bg-blue-900 z-50 flex flex-row" onPress={saveLocation}>
                <Text className="mx-auto text-white font-medium my-auto text-base text-center">
                    Continue
                </Text>
                <Icon
                    style={{ marginLeft: 20 }}
                    name="arrow-forward-circle"
                    color="#fff"
                    size={20}
                />
            </TouchableOpacity>
            <MapView className="w-full h-full"
                onPress={(coords) => { setOrigin(coords.nativeEvent.coordinate) }}
                showsUserLocation={true}
                initialRegion={
                    {
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }
                }>
                <Marker coordinate={origin} draggable={true} />
            </MapView>
        </View>
    )
}

export default ChangeLocation