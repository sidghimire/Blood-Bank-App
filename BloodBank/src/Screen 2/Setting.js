import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {getAuth,signOut} from 'firebase/auth'

const auth=getAuth()

const Setting = () => {
  const logout=()=>{
    signOut(auth)
  }
  return (
    <View>
      <TouchableOpacity onPress={logout} className="h-10 flex-1 rounded-full m-4 bg-black">
        <Text className="text-white my-auto text-center">
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Setting