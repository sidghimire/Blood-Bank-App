import { View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDocs, query, where, getFirestore, getDoc } from 'firebase/firestore/lite'
import Icon from 'react-native-vector-icons/Ionicons';
const db = getFirestore()

const MapBySearch = ({ navigation, route }) => {
    const [origin, setOrigin] = useState({ latitude: 27.648272, longitude: 85.375904 })
    const [userData, setUserData] = useState([])
    const { bloodGroup } = route.params;
    const getLocation = async () => {
        const lat = await AsyncStorage.getItem('latitude')
        const lang = await AsyncStorage.getItem('longitude')
        const data = { latitude: parseFloat(lat), longitude: parseFloat(lang) }
        setOrigin(data)
    }


    const getSurrounding = async () => {

        const profileRef = collection(db, "userProfile")
        const q = query(profileRef, where('userBlood', "==", bloodGroup))
        const querySnapshot = await getDocs(q)
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
            <TouchableOpacity className="absolute top-0 left-0 m-5 z-50 bg-black rounded-full" activeOpacity={0.9} onPress={() => navigation.goBack()}>
                <Icon
                    style={{ margin: 10 }}
                    name="arrow-back"
                    color="#fff"
                    size={30}
                />
            </TouchableOpacity>
            <MapView
                followsUserLocation={true}
                className="w-full h-full"
                initialRegion={
                    {
                        latitude: parseFloat(origin.latitude),
                        longitude: parseFloat(origin.longitude),
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }
                }>




                {userData.map((user) => (
                    <Marker onPress={() => navigation.navigate("ViewProfile", { id: user.id })} coordinate={{ latitude: user.latitude, longitude: user.longitude }} />
                ))}
                <Marker coordinate={origin} pinColor={'#0042F7'} />

            </MapView>
        </View>
    )
}

export default MapBySearch