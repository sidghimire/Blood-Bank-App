import { View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDocs, query, where, getFirestore, getDoc } from 'firebase/firestore/lite'
import Icon from 'react-native-vector-icons/Ionicons';
const db = getFirestore()

const MapById = ({ navigation, route }) => {
    const [origin, setOrigin] = useState({ latitude: 27.648272, longitude: 85.375904 })
    const [lat,setLat]=useState(0)
    const [lang,setLang]=useState(0)
    const { id } = route.params;
    const getLocation = async () => {
        const lat = await AsyncStorage.getItem('latitude')
        const lang = await AsyncStorage.getItem('longitude')
        const data = { latitude: parseFloat(lat), longitude: parseFloat(lang) }
        setOrigin(data)
    }


    const getSurrounding = async () => {
       
        const profileRef = doc(db, "userProfile", id)
        const querySnapshot = await getDoc(profileRef)

        const data = []
        if (querySnapshot.exists) {
            const { latitude, longitude } = querySnapshot.data()
            data.push({
                id: querySnapshot.id,
                latitude:setLat(parseFloat(latitude)),
                longitude:setLang(parseFloat(longitude))
            })
        }

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
                    color="#ffffff"
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




                <Marker onPress={() => navigation.navigate("ViewProfile", { id: id})} coordinate={{ latitude: lat, longitude: lang }} />
                <Marker coordinate={origin} pinColor={'#0042F7'} />

            </MapView>
        </View>
    )
}

export default MapById