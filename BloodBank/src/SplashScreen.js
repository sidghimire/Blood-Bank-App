import { View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({ navigation }) => {
    return (
        <View className="h-full w-full" style={{ backgroundColor: '#fff' }}>
            <View className=" mt-72">
                <Icon
                    style={{ textAlign: 'center' }}
                    name="water"
                    color="#D70032"
                    size={100}
                />
            </View>

        </View>
    )
}

export default SplashScreen