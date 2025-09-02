import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type WelcomeProps = {
  name: string,
  age: number,
  gender: boolean
}



export default function Settings(props : WelcomeProps) {
  return (
    <View style={styles.mainView}>
      <Text>This is from Explore</Text>
      <Text>Welcome {props.name}</Text>
      <Text>Age is {props.age}</Text>
      <Text>Gender is {props.gender ? "Male" : "Female"}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
   
  }
})