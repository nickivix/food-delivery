import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from 'screens/Profile/Settings'
import UserScreen from 'screens/Profile/User'
import InfoScreen from 'screens/Profile/Info'
import AddressesScreen from 'screens/Profile/Addresses'
import AddAddressScreen from 'screens/Profile/AddAddress'
import AboutUsScreen from 'screens/Profile/AboutUs'
import ProfileScreen from 'screens/Profile/Profile'
import { theme } from 'utils/themes'
import { ProfileScreenParamList } from 'screens/types'

const Stack = createStackNavigator<ProfileScreenParamList>()

const ProfileRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blue,
        },
        headerTintColor: theme.colors.white,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        options={{ title: 'Профиль' }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{ title: 'Личные данные' }}
        name="SettingProfile"
        component={UserScreen}
      />
      <Stack.Screen
        options={{ title: 'Настройки' }}
        name="SettingSettings"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{ title: 'Справка' }}
        name="SettingInfo"
        component={InfoScreen}
      />
      <Stack.Screen
        options={{ title: 'Список адресов доставки' }}
        name="SettingAddresses"
        component={AddressesScreen}
      />
      <Stack.Screen
        options={{ title: 'Добавление адреса' }}
        name="AddAddress"
        component={AddAddressScreen}
      />
      <Stack.Screen
        options={{ title: 'О нас' }}
        name="AboutUs"
        component={AboutUsScreen}
      />
    </Stack.Navigator>
  )
}

export default ProfileRouter
