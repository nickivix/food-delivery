import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootTabsParamList = {
  Home: undefined
  Search: undefined
  Market: undefined
  Profile: undefined
}

type ProfileScreenParamList = {
  Profile: undefined
  AboutUs: undefined
  AddAddress: undefined
  SettingAddresses: undefined
  SettingInfo: undefined
  SettingProfile: undefined
  SettingSettings: undefined
}

export type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileScreenParamList,
  'Profile'
>
