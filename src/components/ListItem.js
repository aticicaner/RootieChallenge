import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import todoSelector from '../selectors/todos'

const selectTodos = (state) => state.todos

export default function ListItem() {
  const todos = useSelector(selectTodos)
  const todo = todoSelector(todos)

  return (
    <TouchableOpacity onPress={() => console.log('Clicked on the item!')}>
      <View style={styles.listItemStyles}>
        <View style={styles.innerListItemStyles}></View>
        <View style={styles.listItemContentStyles}>
          <Image
            style={styles.logoStyles}
            source={require('../../assets/character19.png')}
          />
          <View style={styles.textContainerStyles}>
            <Text>9:45</Text>
            <Text>Training Reinforcement</Text>
            <Text>Complete 2 tasks -{`>`}</Text>
          </View>
        </View>
      </View>
      <Text>todo: {JSON.stringify(todo)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItemStyles: {
    backgroundColor: '#5b94e3',
    borderRadius: 8,
    flexDirection: 'row',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3%',
    marginRight: '3%',
  },
  listItemContentStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  textContainerStyles: {
    flexDirection: 'column',
  },
  innerListItemStyles: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: '95%',
    width: '88%',
    marginLeft: '10%',
    // marginRight: '5%',
  },
  logoStyles: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
})
