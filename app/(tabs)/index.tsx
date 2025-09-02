import React from 'react'
import { StyleSheet, View } from 'react-native'
import Settings from './Settings'

export default function index() {

  return (
    <View style={styles.mainView}>
      <Settings name="Abdullah" age={24} gender={true} />


    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue'
  }
})