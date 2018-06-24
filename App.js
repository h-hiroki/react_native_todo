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
  AsyncStorage,
} from 'react-native';

import TodoList from './TodoList'

type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: '', // 入力フォーム用
    todos: [],   // 登録されたTODOの格納用
  }

  constructor(props) {
    super(props);
    this.loadTodos();
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
    }, () => this.storeTodos());
  }

  // DELETEボタンが押されたらTODOを削除する
  onPressDelete(index) {
    this.setState({
      todos: this.state.todos.filter((t, i) => i !== index),
    }, () => this.storeTodos());
  }

  // todosを変換して保存する
  storeTodos() {
    const str = JSON.stringify(this.state.todos) // todosをstring型に変換する。
    AsyncStorage.setItem('todos', str)
  }

  // 保存されたtodosをロードする
  loadTodos() {
    AsyncStorage.getItem('todos').then((str) => {
      const todos = str ? JSON.parse(str) : [];
      this.setState({ todos });
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
        <TodoList
          todos={this.state.todos}
          onPressDelete={(index) => this.onPressDelete(index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#A5FFD6',
  },
  form: {
    backgroundColor: '#EEE',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#FFA69E',
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
