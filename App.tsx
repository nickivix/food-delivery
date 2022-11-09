import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/themes'
import Router from 'screens/index'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
