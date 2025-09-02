import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


type PetProps = {
    name: {
        firstName: string,
        lastName: string
    }
    type: string
}


const Pet = (props: PetProps) => {

  
    const { firstName, lastName } = props.name

    return (
        <View style={styles.mainView}>
            <Text>You Own a pet named {firstName} {lastName}</Text>
            <Text>Which is a type of {props.type}</Text>
        </View>
    )
}

export default Pet

const styles = StyleSheet.create({
    mainView: {


    }
})