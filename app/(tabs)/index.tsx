import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Pet from '../Pet'
import Qualities from '../Qualities'
import Settings from './Settings'



export default function index() {

  const petName = {
    firstName: "Flash",
    lastName: "Gogg"
  }

  const PetQualities = [
    {
      qualityOne: "Big",
      qualityTwo: "Brown Eyes",
      qualityThree: "Runs Fast",
      age: 2
    },

    {
      qualityOne: "Big",
      qualityTwo: "Super Fast",
      qualityThree: "Furry Tail",
      age: 2.5
    }

  ]

  const [message, setMessage] = useState('This is all the information feel free to contact us to change it thank you !');

  return (




    <View style={styles.mainView}>
      <Settings name="Abdullah" age={24} gender={true} />

      <Pet name={petName} type='Husky' />

      <Qualities qualities={PetQualities} />
      <Text>{message}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 50
  }
})