import { StatusBar } from 'react-native'
import { useFonts, Inter_400Regular as Inter } from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}
