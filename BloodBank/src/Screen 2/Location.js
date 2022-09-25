import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
const Location = () => {
  const [origin, setOrigin] = useState({ latitude: 27.648272, longitude: 85.375904 })
  const [destination, setDestination] = useState({ latitude: 27.688671, longitude: 85.335784 })
  return (
    <View className="flex-1 bg-white">
      <MapView className="w-full h-full"
        initialRegion={
          {
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }
        }>
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <Polyline coordinates={[origin, destination]}
          strokeColor="pink"
          strokeWidth={7} />
      </MapView>
    </View>
  )
}

export default Location