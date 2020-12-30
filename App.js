import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'

import ListItem from './src/components/ListItem'
import BottomBar from './src/components/BottomBar'

export default function App() {
  console.log('App was rendered')

  return (
    <SafeAreaView style={styles.containerStyles}>
      <Text style={styles.titleStyles}>TODAY</Text>
      <ListItem />
      <BottomBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    alignItems: 'center',
    backgroundColor: '#e3e8ff',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleStyles: {
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
})
