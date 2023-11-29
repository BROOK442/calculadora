import React from 'react'
import { Text, FlatList, SafeAreaView } from 'react-native'
import estilo from '../../estilo'
import produtos from './produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - {p.preco}</Text>
    }
    return (
        <>
            <SafeAreaView>
                <Text style={estilo.fontG}>Lista de Produtos</Text>
                <FlatList data={produtos} keyExtractor={i => `${i.id}`} renderItem={produtoRender} />
            </SafeAreaView>
        </>
    )
}
