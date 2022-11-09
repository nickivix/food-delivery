import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import SearchScreen from 'screens/Search/Search'

const Stack = createStackNavigator()

const SearchRouter = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.blue,
        },
        headerTintColor: theme.colors.white,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Search"
        options={{ title: 'Search', headerShown: false }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  )
}

export default SearchRouter
