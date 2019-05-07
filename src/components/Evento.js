import React, { Component } from 'react'
import styles from '../style/Padrao'
import { View, Text, TextInput } from 'react-native'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.f40}>{ this.state.texto }</Text>
                
                <TextInput 
                    value={ this.state.texto } 
                    style={styles.input} 
                    onChangeText={this.alterarTexto} />

            </View>
        )
    }

}