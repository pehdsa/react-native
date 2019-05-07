import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style/Padrao'

function parOuImpar(num) {    
    const value = num % 2 == 0 ? 'Par' : 'Ímpar'
    return <Text style={[styles.ex]}>{value}</Text>
}

export default props => 
    <View style={styles.container}>
        {parOuImpar(props.numero)}
        {/* 
            props.numero % 2 == 0 
            ? <Text style={[styles.ex]}>Par</Text> 
            : <Text style={[styles.ex]}>Ímpar</Text>
        */}
    </View>