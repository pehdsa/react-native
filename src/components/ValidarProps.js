import React from 'react'
import styles from '../style/Padrao'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const ValidarProps = props =>
    <View style={styles.container}>
        <Text style={{ fontSize: 35 }}>
            { props.label }
            { props.ano + 2000 }
        </Text>
    </View>

ValidarProps.defaultProps = {
    label: 'Ano: '
}
ValidarProps.PropTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps