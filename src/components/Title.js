import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Title() {
  return <Text style={styles.titleStyles}>TODAY</Text>
}

const styles = StyleSheet.create({
  titleStyles: {
    marginBottom: 20,
    marginRight: '80%',
    justifyContent: 'flex-start',
  },
})
