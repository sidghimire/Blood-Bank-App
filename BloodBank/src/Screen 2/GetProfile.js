import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const GetProfile = ({ navigation }) => {
    const nextScreen = () => {
        if (btnData != "") {
            navigation.navigate("GetProfile")
        }
    }
    const [btnData, setBtnData] = useState("")
    const toggleGroup = (data) => {
        if (data == "") {
            setBtnData("")
        } else {
            setBtnData(data)
        }
    }
    return (
        <View className="flex h-full flex-col p-5 pt-12  bg-white" >
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} className="absolute top-3 left-3">
                <Icon
                    style={{ textAlign: 'center' }}
                    name="chevron-back-outline"
                    color="#D70032"
                    size={35}
                />
            </TouchableOpacity>
            <View className="mt-10 px-5">
                <Text className="text-black font-extrabold text-5xl">
                    Complete {'\n'}Your Profile
                </Text>
            </View>
            <View className="px-4 flex flex-col">
                <TextInput placeholderTextColor="#f66183" onChangeText={(text) => <></>} placeholder='Full Name' className="bg-white text-sm w-full rounded-xl mx-auto px-7 py-3 mt-20 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />
                <TextInput placeholderTextColor="#f66183" onChangeText={(text) => <></>} placeholder='Age' keyboardType='numeric' className="bg-white text-sm w-full rounded-xl mx-auto px-7 py-3 mt-7 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />
                <TextInput placeholderTextColor="#f66183" onChangeText={(text) => <></>} placeholder='Location' className="bg-white text-sm w-full rounded-xl mx-auto px-7 py-3 mt-7 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />
                <TextInput placeholderTextColor="#f66183" onChangeText={(text) => <></>} placeholder='How Many Times Have You Donated Before?' keyboardType='numeric' className="bg-white text-sm w-full rounded-xl mx-auto px-7 py-3 mt-7 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={nextScreen} className="w-5/6 rounded-full p-5 mt-28 mx-auto" style={{ backgroundColor: "#EB7B7E" }}>
                <Text className="text-center text-white font-bold text-xl">Continue</Text>
            </TouchableOpacity>

        </View>
    )
}

export default GetProfile