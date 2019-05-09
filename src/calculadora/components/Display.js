import React from 'react'
import styles from '../style'
import { Text, View } from 'react-native'

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>{ props.value }</Text>
    </View>