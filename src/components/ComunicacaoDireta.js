import React from 'react'
import styles from '../style/Padrao'
import { View, Text } from 'react-native'

export const Filho = props => 
    <View>
        <Text> Filho: { props.nome } { props.sobrenome }</Text>
    </View>

export const Pai = props =>
        <View>
            <Text> Pai: { props.nome } { props.sobrenome }</Text>
            {/* props.children */}            
            { React.Children.map(props.children, c => React.cloneElement(c, { ...props, ...c.props })) }
        </View>

export const Avo = props =>
        <View style={styles.container}>
            
            <Text> Avô: { props.nome } { props.sobrenome }</Text> 
            
            <Pai nome="André" sobrenome={props.sobrenome}>
                <Filho nome="Ana" />
                <Filho nome="Gui" />
                <Filho nome="Davi" />
            </Pai> 
            
            <Pai { ...props }>
                <Filho nome="João" />
                <Filho nome="Maria" />            
            </Pai>

        </View>

export default Avo
