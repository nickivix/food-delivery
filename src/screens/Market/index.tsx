import React from 'react'
import { useTheme } from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import MarketScreen from 'screens/Market/Market'

const Stack = createStackNavigator()

const MarketRouter = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Market"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blue,
        },
        headerTintColor: theme.colors.white,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Market"
        options={{ title: 'Market', headerShown: false }}
        component={MarketScreen}
      />
    </Stack.Navigator>
  )
}

export default MarketRouter
