import React, { useEffect, useState } from 'react'

import Setting from './Screen 2/Setting'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()
const SettingStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Setting' options={{ headerShown: false }} component={Setting} />
        </Stack.Navigator>
    )

}

export default SettingStack