import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../src/style/Padrao'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simple texto="Simples!!!!" />   
        <ParImpar numero="30" />     
        <Inverter texto="React Nativo" /> 
        <MegaSena numeros={6} />
      </View>
    );
  }
}


