import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import "../../firebaseConfig"
import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const auth = getAuth()


const Signup = ({ navigation }) => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const createAccount = () => {
    if (email != "" && password != "") {
      createUserWithEmailAndPassword(auth, email, password).then(user => {
        setEmail()
        setPassword()
      }).catch(error => {
        setError(true)
        setErrorMsg(error.code)
        setEmail("")
        setPassword("")
      });
    } else {
      setError(true)
      setErrorMsg("Empty")
      setEmail("")
      setPassword("")
    }
  }
  console.log(errorMsg)
  return (
    <View className="h-full w-full" style={{ backgroundColor: '#fff' }}>
      <View className="mt-16">
        <Icon
          style={{ textAlign: 'center' }}
          name="water"
          color="#D70032"
          size={100}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} className="absolute top-3 left-3">
        <Icon
          style={{ textAlign: 'center' }}
          name="chevron-back-outline"
          color="#D70032"
          size={35}
        />
      </TouchableOpacity>
      <TextInput placeholderTextColor="#D70032" value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' className="bg-white text-sm w-3/4 rounded-lg mx-auto px-5 mt-40 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />
      <TextInput placeholderTextColor="#D70032" value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' className="bg-white text-sm w-3/4 rounded-lg mx-auto px-5 mt-7 font-semibold tracking-wider" style={{ borderWidth: 1, borderColor: '#D70032', backgroundColor: '#fff', color: '#D70032' }} />

      <TouchableOpacity onPress={createAccount} style={{ borderWidth: 2, borderColor: '#D70032' }} activeOpacity={0.9} underlayColor="red" className="bg-white rounded-xl w-3/4 mx-auto p-5 mt-20 ">
        <Text className="text-center font-semibold tracking-wider text-xl" style={{ color: '#D70032' }}>Sign Up</Text>
      </TouchableOpacity>
      <View className="flex flex-row p-10 py-0">
        <TouchableOpacity activeOpacity={0.8} className="rounded-md mt-4" onPress={() => navigation.navigate("Login")}>
          <View className="flex flex-row mr-auto p-3">
            <Text className="text-right  text-base" style={{ color: '#D70032' }}>Already Have An Account? </Text>
          </View>
        </TouchableOpacity>
      </View>
      {error == false ? <></> :
        <View className="w-5/6 border border-red-600 p-4 mx-auto mt-16 rounded bg-red-100 flex flex-row">
          <Icon
            style={{ textAlign: 'center' }}
            name="close-circle"
            color="#D70032"
            size={25}
          />
          {errorMsg == "Empty" ?
            <Text className="text-red-600 my-auto mx-auto">One/Two Field Is Empty</Text>
            : <></>
          }
          {errorMsg == "auth/email-already-in-use" ?
            <Text className="text-red-600 my-auto mx-auto">Empty Already Exists!</Text>
            : <></>
          }
          {errorMsg == "auth/weak-password" ?
            <Text className="text-red-600 my-auto mx-auto">Password Must Be Atleast 8 characters Long</Text>
            : <></>
          }
        </View>
      }
    </View>
  )
}

export default Signup