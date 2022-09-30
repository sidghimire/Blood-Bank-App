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



const MainScreen = ({ userData, navigation, bloodGroup }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("ViewProfile", { id: item.id })} className="rounded-lg p-2 mx-7 my-1 py-4 bg-gray-100 flex flex-row" >
        <View className='flex flex-col'>
          <Image source={Avatar} className="w-12 h-12 my-auto mx-auto" />
          <Text className="text-gray-600 font-normal text-sm my-auto px-5 uppercase">Age: {item.age}</Text>

        </View>
        <View className="flex-1 flex flex-col">
          <Text className="text-black font-bold text-base my-auto px-5 uppercase">{item.fullname}</Text>
          <Text className="text-gray-600 font-bold my-auto px-5 uppercase" style={{ fontSize: 12 }}>{item.location}</Text>
        </View>
        <View className='flex flex-col'>
          <View className="w-10 h-10 my-auto" style={{ backgroundColor: '#DF4843' }}>
            <Text className="my-auto mx-auto text-white">{item.userBlood}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.9} className="w-10 h-10 my-2 rounded-full" style={{ backgroundColor: '#376140' }} onPress={()=>navigation.navigate('MapById',{id:item.id})}>
            <Icon
              name="planet"
              color="#fff"
              size={20}
              style={{marginLeft:'auto',marginRight:'auto',marginTop:'auto',marginBottom:'auto'}}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>)
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row">
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
          <Icon
            style={{ margin: 10 }}
            name="arrow-back"
            color="#000"
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} className="ml-auto" onPress={() => navigation.navigate("MapBySearch", { bloodGroup: bloodGroup })}>
          <Icon
            style={{ margin: 10 }}
            name="map"
            color="#000"
            size={30}
          />
        </TouchableOpacity>
      </View>
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
        <MainScreen userData={userData} navigation={navigation} bloodGroup={bloodGroup} />
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