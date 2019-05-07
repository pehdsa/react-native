import React from 'react'
import styles from '../style/Padrao'
import { View, Button, Alert, ToastAndroid, Platform } from 'react-native'


export default props => {
 
    const notificar = msg => {
        if(Platform.OS == 'android') { // ios
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <View style={styles.container}>
            
            <Button title="Plataforma ?"
                onPress={() => notificar('Parabéns')} />

        </View>
    )
    
}