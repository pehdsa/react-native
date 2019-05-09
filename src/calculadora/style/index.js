import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    display: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)'
    },
    displayValue: {
      fontSize: 60,
      color: '#fff'
    },  
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    button: {
      fontSize: 40,
      height: Dimensions.get('window').width / 4,
      width: Dimensions.get('window').width / 4,
      padding: 20,
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#e1e1e1'
    },
    operationButton: {
      color: '#FFF',
      backgroundColor: '#fa8231',
      borderColor: '#ef6305'
    },
    buttonDouble: {
      width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
      width: (Dimensions.get('window').width / 4) * 3
    }

});

  export default styles