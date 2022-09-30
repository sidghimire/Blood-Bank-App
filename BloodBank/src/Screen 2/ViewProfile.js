import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, doc, getDoc, query, where, getFirestore } from 'firebase/firestore/lite'

import Icon from 'react-native-vector-icons/Ionicons';
import Avatar2 from '../../assets/avatar/avatar2.png'


const db=getFirestore()

const ViewProfile = ({ route, navigation }) => {
    const {id}=route.params;
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhone] = useState("9844442363");
    const [age, setAge] = useState("");
    const [frequency, setFrequency] = useState("");
    const [location, setLocation] = useState("");
    const [userBlood, setUserBlood] = useState("");


    const getData = async() => {
        const profileRef = doc(db, "userProfile",id)
        const querySnapshot = await getDoc(profileRef)
        const data=querySnapshot.data()
        setAge(data['age'])
        setFullName(data['fullName'])
        setUserBlood(data['userBlood'])
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <View className="h-full bg-white flex flex-col">
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
                <Icon
                    style={{ margin: 10 }}
                    name="arrow-back"
                    color="#000"
                    size={30}
                />
            </TouchableOpacity>

            <View className="mx-auto rounded-full p-1 mt-5" style={{ borderWidth: 3, borderColor: '#E8A94C', borderStyle: 'dashed' }}>
                <Image className="w-40 h-40 rounded-full" source={Avatar2} />
            </View>
            
            <View className="flex flex-row relative bottom-0 mb-10 mt-7">
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
                <Text className="text-center text-gray-500 mt-2 font-semibold text-base">
                    {location}
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

export default ViewProfile
