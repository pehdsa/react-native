import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style/Padrao'

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return <View style={styles.container}><Text style={[styles.ex]}>{inv}</Text></View>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for(let i = 0; i < numeros.length; i++) {
        let novo = 0
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo
    }

    numeros.sort((a, b) => a - b)

    return <View style={styles.container}><Text style={[styles.ex]}>{numeros.join(', ')}</Text></View>

}
