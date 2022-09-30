import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DashboardStack from './DashboardStack'
import Location from './Screen 2/Location'
import Share from './Screen 2/Share'
import Profile from './Screen 2/Profile'
import SettingStack from './SettingStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const DashboardTabNav = ({navigation}) => {
    const CustomTab = () => {
        return (
            <View className=" h-20 absolute w-full bottom-2" style={{ backgroundColor: "transparent"}}>
                <View className="flex flex-row mx-5 px-5 rounded-full bg-gray-100">
                    <View className="flex-1">
                        <TouchableOpacity onPress={()=>navigation.navigate("SettingStack")} activeOpacity={0.8} className="my-auto">
                            <Icon
                                style={{ textAlign: 'center' }}
                                name="cog-outline"
                                color="#6a6a6a"
                                size={27}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1">
                        <TouchableOpacity onPress={()=>navigation.navigate("Location")} activeOpacity={0.8} className="my-auto">
                            <Icon
                                style={{ textAlign: 'center' }}
                                name="location-outline"
                                color="#6a6a6a"
                                size={27}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 mx-2">
                        <TouchableOpacity onPress={()=>navigation.navigate("DashboardStack")} activeOpacity={0.8} className="relative rounded-full w-20 h-20 mx-auto bg-white bottom-4" style={{backgroundColor:"#D70032"}}>
                            <Icon
                                style={{marginTop:'auto',marginBottom:'auto',marginLeft:'auto',marginRight:'auto'}}
                                name="water"
                                color="#fff"
                                size={50}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1">
                        <TouchableOpacity onPress={()=>navigation.navigate("Share")} activeOpacity={0.8} className="my-auto">
                            <Icon
                                style={{ textAlign: 'center' }}
                                name="notifications-outline"
                                color="#6a6a6a"
                                size={27}
                            />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1">
                        <TouchableOpacity onPress={()=>navigation.navigate("Profile")} activeOpacity={0.8} className="my-auto">
                            <Icon
                                style={{ textAlign: 'center' }}
                                name="person-outline"
                                color="#6a6a6a"
                                size={27}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <Tab.Navigator tabBar={() => <CustomTab />} screenOptions={{ headerShown: false }}>
            <Tab.Screen name='DashboardStack' component={DashboardStack} />
            <Tab.Screen name='Location' component={Location} />
            <Tab.Screen name='SettingStack' component={SettingStack} />
            <Tab.Screen name='Share' component={Share} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default DashboardTabNav