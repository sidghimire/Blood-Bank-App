import React, { useEffect, useState } from 'react'
import Dashboard from './Screen 2/Dashboard'
import FindDonor from './actions/FindDonor'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const auth = getAuth()

const DashboardStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' options={{ headerShown: false }} component={Dashboard} />
            <Stack.Screen name='FindDonor' options={{ headerShown: false }} component={FindDonor} />
        </Stack.Navigator>
    )

}

export default DashboardStack