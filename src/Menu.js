import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simple from './components/Simple'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'

export default createDrawerNavigator({
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