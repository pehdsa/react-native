import React from 'react'
import styles from '../style/Padrao'
import { View, ScrollView, Text, FlatList } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Maria', nota: 8 },
    { id: 3, nome: 'Marcus', nota: 6 },
    { id: 4, nome: 'Lucas', nota: 10 },
    { id: 5, nome: 'João', nota: 7.9 },
    { id: 6, nome: 'Maria', nota: 8 },
    { id: 7, nome: 'Marcus', nota: 6 },
    { id: 8, nome: 'Lucas', nota: 10 },
    { id: 9, nome: 'João', nota: 7.9 },
    { id: 10, nome: 'Maria', nota: 8 },
    { id: 11, nome: 'Marcus', nota: 6 },
    { id: 12, nome: 'Lucas', nota: 10 },
    { id: 13, nome: 'João', nota: 7.9 },
    { id: 14, nome: 'Maria', nota: 8 },
    { id: 15, nome: 'Marcus', nota: 6 },
    { id: 16, nome: 'Lucas', nota: 10 },
    { id: 17, nome: 'Maria', nota: 8 },
    { id: 18, nome: 'Marcus', nota: 6 },
    { id: 19, nome: 'Lucas', nota: 10 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
    /// Flex
    //justifyContent: 'center',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={ itemEstilo }>
        <Text>Nome: { props.nome }</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: { props.nota }</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno { ...item } />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )

}