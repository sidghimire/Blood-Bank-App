import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { doc, setDoc, getFirestore, getDoc, updateDoc } from 'firebase/firestore/lite'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar2 from '../../assets/avatar/avatar2.png'
const auth = getAuth()
const db = getFirestore()

const Setting = ({ navigation }) => {
  const logout = () => {
    signOut(auth)
  }

  const [fullName, setFullName] = useState("");
  const [changeFullName, setChangeFullName] = useState("")
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
        setChangeFullName(name)
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

  const getExist = async () => {
    const docRef = doc(db, "userProfile", auth.currentUser.uid)
    const docSnap = await getDoc(docRef)
    console.log("Hi")
    if (docSnap.exists()) {
      const data = docSnap.data()
      try {
        await AsyncStorage.setItem('fullName', data['fullName'])
        await AsyncStorage.setItem('age', data['age'])
        await AsyncStorage.setItem('frequency', data['frequency'])
        await AsyncStorage.setItem('location', data['location'])
        await AsyncStorage.setItem('userBlood', data['userBlood'])
        getLocalStorage()

      } catch (e) {
        console.log(e)
      }
    } else {
    }
  }
  const updateDb = async () => {
    const user = auth.currentUser
    if (changeFullName != "" && location != "" && age != "" && age != "") {
      await updateDoc(doc(db, 'userProfile', user.uid), {
        fullName: changeFullName,
        age: age,
        location: location,
        frequency: frequency,
        userBlood: userBlood
      }).then((res) => {
        getExist()
      })
    }
  }


  const changeLocation = () => {
    navigation.navigate("ChangeLocation")
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  return (
    <View className="flex-1 bg-white">
      <View className="m-4 bg-gray-100 p-8 rounded-3xl flex flex-col ">
        <Image source={Avatar2} className="mx-auto w-20 h-20 rounded-full" />
        <Text className="text-center text-2xl font-semibold text-black m-5 mb-2">{fullName}</Text>
        <Text className="text-center text-sm font-light text-black ">{auth.currentUser.email}</Text>
        <View className="flex flex-row">
          <TouchableOpacity className=' bg-green-800 rounded-full p-3 m-1 w-1/2 mx-auto flex flex-row' onPress={changeLocation}>
            <Icon
              name="location"
              color="#fff"
              size={20}
            />
            <Text className="text-center text-sm text-white my-auto flex-1">Change Location</Text>
          </TouchableOpacity>
          <TouchableOpacity className=' rounded-full p-3 m-1 mx-10 flex flex-row'  style={{backgroundColor:'#A70000'}} onPress={logout}>
            <Icon
              name="log-out"
              color="#fff"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row px-8">
        <Text className=" text-xl font-light text-black tracking-widest my-auto">Preferences</Text>

      </View>
      <View className="m-4 bg-gray-100 p-5 rounded-3xl flex flex-col ">
        <View className='flex flex-col'>
          <View className="w-full flex flex-col">
            <Text className="mb-3 ml-3 text-sm font-light text-black ">Full Name</Text>
            <TextInput className="p-3 bg-white rounded-xl w-full" placeholder='Name' onChangeText={(text) => setChangeFullName(text)} value={changeFullName} />
          </View>
          <View className="w-full flex flex-col mt-4">
            <Text className="mb-3 ml-3 text-sm font-light text-black ">Location</Text>
            <TextInput className="p-3 bg-white rounded-xl w-full" placeholder='Location' value={location} onChangeText={(text) => setLocation(text)} />
          </View>
          <View className="w-full flex flex-col mt-4">
            <Text className="mb-3 ml-3 text-sm font-light text-black ">Age</Text>
            <TextInput keyboardType='numeric' className="p-3 bg-white rounded-xl w-full" placeholder='Age' value={age} onChangeText={(text) => setAge(text)} />
          </View>
        </View>

      </View>
      <View className='px-8'>
        <TouchableOpacity className=' bg-blue-800 rounded-full p-4 ' onPress={updateDb}>
          <Text className="text-center text-base text-white">Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Setting

/*
<TouchableOpacity onPress={logout} className=" border border-full rounded-full border-red-500 m-7 p-1">
        <Icon
          style={{marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}
          name="log-out-outline"
          color="#D70032"
          size={30}
        />
      </TouchableOpacity>

  */