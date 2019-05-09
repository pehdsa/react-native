import React, { Component } from 'react'
import styles from '../style/Padrao'
import { View, Text, TextInput } from 'react-native'

export const Entrada = props =>
    <View>
        <TextInput value={ props.texto } style={ styles.input } onChangeText={ props.chamarQuandoMudar } />
    </View>


export default class TextoSincronizado extends Component {
 
    state = {
        texto: ''
    }

    alteraTexto = texto => {
        this.setState({ texto })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.f40}>{ this.state.texto }</Text>
                <Entrada texto={this.state.texto} chamarQuandoMudar={this.alteraTexto} />
            </View>
        )
    }

}