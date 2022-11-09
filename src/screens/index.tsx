import React from 'react'
import styled from 'styled-components/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabsParamList } from 'screens/types'
import { SvgProps } from 'react-native-svg'
import {
  Home,
  HomeOutline,
  Search,
  SearchOutline,
  Market,
  MarketOutline,
  Profile,
  ProfileOutline,
} from 'uikit/Icons'
import HomeRouter from 'screens/Home/index'
import MarketRouter from 'screens/Market/index'
import SearchRouter from 'screens/Search/index'
import ProfileRouter from 'screens/Profile/index'

const Tab = createBottomTabNavigator<RootTabsParamList>()

const RootRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon: React.FC<SvgProps> = Home

          if (route.name === 'Home') {
            Icon = focused ? HomeOutline : Home
          } else if (route.name === 'Search') {
            Icon = focused ? SearchOutline : Search
          } else if (route.name === 'Market') {
            Icon = focused ? MarketOutline : Market
          } else if (route.name === 'Profile') {
            Icon = focused ? ProfileOutline : Profile
          }
          return (
            <IconContainer>
              <Icon width={25} height={25} />
            </IconContainer>
          )
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeRouter} />
      <Tab.Screen name="Search" component={SearchRouter} />
      <Tab.Screen name="Market" component={MarketRouter} />
      <Tab.Screen name="Profile" component={ProfileRouter} />
    </Tab.Navigator>
  )
}

export default RootRouter

const IconContainer = styled.View`
  width: 30px;
`
