import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {getAuth, signOut } from 'firebase/auth'
const auth=getAuth()
const Dashboard = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => signOut(auth)}>
                <Text>Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard