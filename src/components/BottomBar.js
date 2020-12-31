import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

const buttonContents = [
  {
    source: require('../../assets/hourglass.png'),
    text: 'Overdue',
  },
  {
    source: require('../../assets/map-pin.png'),
    text: 'Today',
  },
  {
    source: require('../../assets/menu.png'),
    text: 'Activity',
  },
]

export default function BottomBar() {
  return (
    <View style={styles.bottomMenuStyles}>
      {buttonContents.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.bottomMenuButtonStyles}
          onPress={() => {}}
        >
          <Image source={item.source} />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomMenuStyles: {
    borderColor: 'grey',
    borderTopWidth: 1,
    paddingTop: 16,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 8,
  },
  bottomMenuButtonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
