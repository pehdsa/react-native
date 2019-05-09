import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'
import Calculadora from './calculadora/App'

export default createDrawerNavigator({
    Calculadora: {
        screen: () => <Calculadora />         
    },  
    Flex: {
        screen: () => <Flex />         
    },  
    ListaFlex: {
        screen: () => <ListaFlex />,
        navigationOptions: { title: 'Lista Flex' }
    }, 
    TextoSincronizado: {
        screen: () => <TextoSincronizado />,
        navigationOptions: { title: 'Texto Sincronizado' } 
    }, 
    Avo: {
        screen: () => <Avo nome="Mauro" sobrenome="Duarte" />,
        navigationOptions: { title: 'Comunicação Direta' }
    },
    Evento: {
        screen: () => <Evento />          
    },
    Evento: {
        screen: () => <Evento />          
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={19} />,
        navigationOptions: { title: 'Validar Propriedades' }
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />, 
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo" />        
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par ou Ímpar' }     
    },
    Simple: {
        screen: () => <Simple texto="Fexível!!!!" />,
        navigationOptions: { title: 'Simples' }     
    }
}, { drawerWidth: 300 }) 