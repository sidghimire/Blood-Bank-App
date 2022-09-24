import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {getAuth, signOut } from 'firebase/auth'
const auth=getAuth()
const Dashboard = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => signOut(auth)}>
                <Text className="text-center">Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard