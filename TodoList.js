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
    backgroundColor: '#F9F8F8'
  },
  todoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    justifyContent: 'space-between',
  },
})

export default (props) => (
  <ScrollView style={styles.scrollview}>
  {
    props.todos.map((todo, index) => (
      <View key={index} style={styles.todoContainer}>
        <Text>{todo}</Text>
        <TouchableOpacity　onPress={() => props.onPressDelete(index)}>
          <Text>DELETE</Text>
        </TouchableOpacity>
      </View>
    ))
  }
  </ScrollView>
)
