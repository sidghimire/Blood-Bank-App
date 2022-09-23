import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native';
const Welcome = ({navigation}) => {
    return (
        <View className="h-full w-full" style={{ backgroundColor: '#D70032' }}>
            <View className="mt-72">
                <Icon
                    style={{ textAlign: 'center' }}
                    name="water"
                    color="#fff"
                    size={100}
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")} activeOpacity={0.9} underlayColor="red" className="bg-white rounded-xl w-3/4 mx-auto p-5 mt-40 ">
                <Text className="text-center font-semibold tracking-wider text-xl" style={{ color: '#D70032' }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>navigation.navigate("Signup")} activeOpacity={0.7} className="bg-white rounded-xl w-3/4 mx-auto p-5 mt-5" style={{ borderColor: "#fff", borderWidth: 3, backgroundColor: "#D70032" }}>
                <Text className="text-center font-semibold tracking-wider text-xl" style={{ color: '#fff' }}>Create Account</Text>
            </TouchableOpacity>

            <View className="flex flex-row p-10">
                <TouchableHighlight className="flex-1">
                    <Text className="tracking-widest text-base text-white text-right">Learn More</Text>
                </TouchableHighlight>
                
            </View>
        </View>
    )
}

export default Welcome