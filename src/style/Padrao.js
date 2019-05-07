import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
    },
    f40: {
        fontSize: 40
    },
    ex: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
      width: 280,
      height: 70,
      fontSize: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 20
    } 
});

  export default styles