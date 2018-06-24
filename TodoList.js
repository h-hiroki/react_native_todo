import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#F9F8F8'
  },
  todoContainer: {
    backgroundColor: '#FFF',
    padding: 10,
  },
})

export default (props) => (
  <ScrollView style={styles.scrollview}>
  {
    props.todos.map((todo, index) => (
      <View key={index} style={styles.todoContainer}>
        <Text>{todo}</Text>
      </View>
    ))
  }
  </ScrollView>
)
