/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: '', // 入力フォーム用
    todos: [],   // 登録されたTODOの格納用
  }

  // フォームの情報を更新する
  onChangeText(newTodo) {
    this.setState({ newTodo }) // shortHand
  }

  // ADDボタンが押されたらTODOを登録する
  onPressAdd() {
    const {newTodo} = this.state;
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos], // newTodoとtodosを合成した配列を新規作成する
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.form}
          value={this.state.newTodo}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.onPressAdd()}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#63D471',
    padding: 14,
    borderRadius: 4,
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
