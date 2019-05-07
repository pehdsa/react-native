import React from 'react'
import styles from '../style/Padrao'
import { View, Text } from 'react-native'
/*
export default function(props) {
    return (
        <Text>{props.texto}</Text>
    )
}*/

export default (props) => {
    return (
        <View style={styles.container}><Text style={[styles.ex]} >Arrow: {props.texto}</Text></View>
    )
}