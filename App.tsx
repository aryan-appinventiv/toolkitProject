import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import {store} from './src/redux/store';
import CounterSend from './src/screens/counterSend';

const App = () => {
  return (
    <Provider store={store}>
      <CounterSend/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})