import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#FEE9E1'
  },
  todoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginTop: 2,
    borderRadius: 4,
    borderWidth: 0.5,
    borderTopColor: 0,
    borderLeftColor: 0,
    borderRightColor: 0,
    borderColor: '#d6d7da',
    justifyContent: 'space-between',
  },
  planeText:{
    color: '#B09E99',
  },
  deleteText: {
    color: '#FF686B'
  },
})

export default (props) => (
  <ScrollView style={styles.scrollview}>
  {
    props.todos.map((todo, index) => (
      <View key={index} style={styles.todoContainer}>
        <Text style={styles.planeText}>{todo}</Text>
        <TouchableOpacity　onPress={() => props.onPressDelete(index)}>
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    ))
  }
  </ScrollView>
)
