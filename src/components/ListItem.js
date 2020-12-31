import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import todoSelector from '../selectors/todo'
import { ListItemStyles } from './ListItem.styles'

const selectTodos = (state) => state.todos

export default function ListItem() {
  const todos = useSelector(selectTodos)
  const todo = todoSelector(todos)

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.listItemStyles}>
        <View style={styles.innerListItemStyles}></View>
        <View style={styles.listItemContentStyles}>
          <Image
            style={styles.logoStyles}
            source={require('../../assets/character19.png')}
          />
          <View style={styles.textContainerStyles}>
            <Text style={styles.todoTimeStyles}>09:45</Text>
            <Text style={styles.todoTitleStyles}>{todo.title}</Text>
            <Text>Complete 2 tasks →</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(ListItemStyles)
