import React from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import { Provider } from 'react-redux'

import ListItem from './src/components/ListItem'
import BottomBar from './src/components/BottomBar'

import store from './src/store/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.containerStyles}>
        <Text style={styles.titleStyles}>TODAY</Text>
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
  titleStyles: {
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
})

// TODO: ADD A FILTER TO SELECT INCOMPLETE TODO to todos selector

// TODO: State at the moment : Request successful, state is not being set, views are okay
