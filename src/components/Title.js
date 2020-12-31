import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { TitleStyles } from './Title.styles'

export default function Title() {
  return <Text style={styles.titleStyles}>TODAY</Text>
}

const styles = StyleSheet.create(TitleStyles)
