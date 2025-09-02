import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


type PetQualities = {
    qualities: {
        qualityOne: string,
        qualityTwo: string,
        qualityThree: string,
        age: number
    }[]
}


const Qualities = (props: PetQualities) => {



    return (
        <View>
            {props.qualities.map((e, i) => {
                if (i === 0) return <Text>Your Pet is {e.qualityOne} and is {e.qualityTwo} with age {e.age} and is {e.qualityThree}</Text>
            })}
            
            
        </View>
    )
}

export default Qualities

const styles = StyleSheet.create({})