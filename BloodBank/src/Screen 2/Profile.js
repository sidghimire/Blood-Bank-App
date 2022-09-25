import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import Avatar2 from '../../assets/avatar/avatar2.png'
const Profile = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhone] = useState("9844442363");
    const [age, setAge] = useState("");
    const [frequency, setFrequency] = useState("");
    const [location, setLocation] = useState("");
    const [userBlood, setUserBlood] = useState("");
    const getLocalStorage = async () => {
        try {
            const blood = await AsyncStorage.getItem('userBlood');
            if (blood != null) {
                setUserBlood(blood)
            }
            const name = await AsyncStorage.getItem('fullName');
            if (name != null) {
                setFullName(name)
            }
            const lAge = await AsyncStorage.getItem('age');
            if (lAge != null) {
                setAge(lAge)
            }
            const frequency = await AsyncStorage.getItem('frequency');
            if (frequency != null) {
                setFrequency(frequency)
            }
            const location = await AsyncStorage.getItem('location');
            if (location != null) {
                setLocation(location)
            }

        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        getLocalStorage()
    }, [])

    return (
        <View className="h-full bg-white flex flex-col">
            <View className="flex flex-row p-5  ">
                <Icon
                    name="water"
                    color="#D70032"
                    size={50}
                />
                <Text className="my-auto font-bold text-2xl text-black">B-Bank</Text>
                <Icon
                    style={{ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
                    name="notifications-outline"
                    color="#000"
                    size={30}
                />
            </View>
            <View className="mx-auto rounded-full p-1 mt-5" style={{ borderWidth: 3, borderColor: '#E8A94C', borderStyle: 'dashed' }}>
                <Image className="w-40 h-40 rounded-full" source={Avatar2} />
            </View>
            <TouchableOpacity className="bg-black w-11 h-11 rounded-full mx-auto relative bottom-7 p-2" style={{ borderWidth: 2, borderColor: '#fff' }}>
                <Icon
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
                    name="brush-outline"
                    color="#fff"
                    size={20}
                />
            </TouchableOpacity>
            <View className="flex flex-row relative bottom-0 mb-10">
                <View className="w-12 h-12 rounded ml-auto mr-1 " style={{ backgroundColor: "#EB7B7E" }} >
                    <Text className="text-white mx-auto my-auto text-xl font-bold ">{userBlood}</Text>
                </View>
                <View className="w-12 h-12 rounded mr-auto ml-1 " style={{ backgroundColor: "#EB7B7E" }} >
                    <Text className="text-white mx-auto my-auto text-xl font-bold ">{age}</Text>
                </View>
            </View>
            <View>
                <Text className="text-center text-black font-bold text-3xl">
                    {fullName}
                </Text>
                <Text className="text-center text-gray-500 mt-2 font-semibold text-base">
                    {phoneNumber}
                </Text>
            </View>

            <View activeOpacity={0.9} className="flex flex-row p-4 mx-5 pt-10 mt-20" >

                <TouchableOpacity activeOpacity={0.8} className='flex-1'>
                    <Icon
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        name="logo-facebook"
                        color="#046EE5"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} className='flex-1'>
                    <Icon
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        name="logo-instagram"
                        color="#F20D4D"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} className='flex-1'>
                    <Icon
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        name="logo-twitter"
                        color="#1D9BF0"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} className='flex-1'>
                    <Icon
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        name="logo-whatsapp"
                        color="#12940A"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} className='flex-1'>
                    <Icon
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                        name="logo-linkedin"
                        color="#0A66C2"
                        size={30}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Profile
/*
<TouchableOpacity className="bg-black w-11 h-11 rounded-full mx-auto relative bottom-7 p-2" style={{ borderWidth: 2, borderColor: '#fff' }}>
                <Icon
                    style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto' }}
                    name="brush-outline"
                    color="#fff"
                    size={20}
                />
            </TouchableOpacity>
            */