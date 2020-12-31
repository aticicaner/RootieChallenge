import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store/store'

import ListItem from './src/components/ListItem'
import BottomBar from './src/components/BottomBar'
import Title from './src/components/Title'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.containerStyles}>
        <Title />
        <ListItem />
        <BottomBar />
      </SafeAreaView>
    </Provider>
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
})
