import React from 'react'
import { useTheme } from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from 'screens/Home/Main'

const Stack = createStackNavigator()

const HomeRouter = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blue,
        },
        headerTintColor: theme.colors.white,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        options={{ title: 'Main', headerShown: false }}
        component={MainScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeRouter
