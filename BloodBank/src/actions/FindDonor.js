import { View, Text, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { collection, doc, getDocs, query, where, getFirestore, getDoc } from 'firebase/firestore/lite'
import Avatar from '../../assets/avatar/avatar.png'

const db = getFirestore()

const LoadingScreen = () => {
  return (
    <View className="my-auto" >
      <Icon
        style={{ textAlign: 'center' }}
        name="water"
        color="#D70032"
        size={100}
      />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}



const MainScreen = ({ userData, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("ViewProfile",{id:item.id})} className="rounded-lg p-5 mx-7 my-5 bg-gray-100 flex flex-row" >
        <Image source={Avatar} className="w-16 h-16" />
        <View className="flex-1 flex flex-col">
          <Text className="text-black font-bold text-xl my-auto px-10 uppercase">{item.fullname}</Text>
          <Text className="text-gray-600 font-bold text-sm my-auto px-10 uppercase">Age: {item.age}</Text>
          <Text className="text-gray-600 font-bold my-auto px-10 uppercase" style={{ fontSize: 12 }}>{item.location}</Text>
        </View>
        <View className="w-10 h-10 my-auto" style={{ backgroundColor: '#DF4843' }}>
          <Text className="my-auto mx-auto text-white">{item.userBlood}</Text>
        </View>
      </TouchableOpacity>)
  };


  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
        <Icon
          style={{ margin: 10 }}
          name="arrow-back"
          color="#000"
          size={30}
        />
      </TouchableOpacity>
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const FindDonor = ({ route, navigation }) => {

  const { bloodGroup } = route.params;
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(null);


  const getUserByBlood = async () => {
    setLoading(true)
    const profileRef = collection(db, "userProfile")
    const q = query(profileRef, where("userBlood", "==", bloodGroup))
    const querySnapshot = await getDocs(q)
    const data = []
    querySnapshot.forEach((doc) => {
      const { age, frequency, fullName, location, userBlood } = doc.data()
      data.push({
        id: doc.id,
        age: age,
        frequency: frequency,
        fullname: fullName,
        location: location,
        userBlood: userBlood
      })

    })
    setUserData(data)
    setLoading(false)

  }


  useEffect(() => {
    getUserByBlood()
  }, [])




  return (
    <View className="bg-white flex-1">
      {loading ?
        <LoadingScreen />
        :
        <MainScreen userData={userData} navigation={navigation} />
      }

    </View>

  )
}

export default FindDonor

/*const profileRef = collection(db, "userProfile")
    const q = query(profileRef, where("userBlood", "==", bloodGroup))
    const querySnapshot = getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      setUserData(userData => [...userData, {
        id: doc.id,
        data: doc.data()
      }])

    })
    */