import React, { Component } from 'react'
import styles from '../style/Padrao'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {

    state = {
        numero: 0
    }

    maisUm = () => {
        const numero = this.state.numero + 1
        this.setState({ numero })
    }

    limpar = () => {
        this.setState({ numero: 0 })
    }

    render() {        
        return (
            <View style={styles.container}>
                
                <Text style={{fontSize: 30}}>{ this.state.numero }</Text> 
                
                <TouchableHighlight style={{ marginTop: 10, paddingTop: 15, paddingBottom: 15 }}
                    onPress={this.maisUm}                    
                    onLongPress={this.limpar}
                    >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>

            </View>
        )
    }

}
