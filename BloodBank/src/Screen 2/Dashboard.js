import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Dashboard = ({navigation}) => {
    const storeGroup=async()=>{
        try{
            await AsyncStorage.setItem('userBlood',btnData)
        }catch(e){
            console.log(e)
        }
    }
    const nextScreen=()=>{
        if(btnData!=""){
            storeGroup()
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
        <View className="flex h-full flex-col p-5 pt-8 bg-white" >
            <View className="mt-10">
                <Text className="text-black font-extrabold text-6xl text-center">
                    Find help {'\n'}right now
                </Text>
                <Text className="my-4 text-base text-black font-bold text-center">
                    Select the blood group you need
                </Text>
            </View>
            <View className="flex flex-row py-5 mt-6">
                <View className="flex-1">
                    {btnData == "A+" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold ">A+</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("A+")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>A+</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "O+" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">O+</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("O+")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>O+</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "B+" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">B+</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("B+")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>B+</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>



            <View className="flex flex-row py-5">
                <View className="flex-1">
                    {btnData == "AB+" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">AB+</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("AB+")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>AB+</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "B" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">B</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("B")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>B</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "A-" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">A-</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("A-")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>A-</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>



            <View className="flex flex-row py-5">
                <View className="flex-1">
                    {btnData == "O-" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">O-</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("O-")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>O-</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "B-" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">B-</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("B-")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>B-</Text>
                        </TouchableOpacity>
                    }
                </View>
                <View className="flex-1">
                    {btnData == "AB-" ?
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: "#EB7B7E" }} onPress={() => toggleGroup("")}>
                            <Text className="text-white mx-auto my-auto text-xl font-bold">AB-</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity activeOpacity={0.7} className="w-20 h-20 rounded-full mx-auto bg-white border border-red-300" onPress={() => toggleGroup("AB-")}>
                            <Text className=" mx-auto my-auto text-xl font-bold" style={{ color: "#EB7B7E" }}>AB-</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={nextScreen} className="w-5/6 rounded-full p-5 mx-auto mt-10 border bg-white" style={{borderColor:"#EB7B7E"}}>
                <Text className="text-center text-white font-bold text-xl" style={{color:"#EB7B7E"}}>Find Donor</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard