import React from 'react'
import { Text } from 'react-native'
import estilo from '../../estilo'
import produtos from './produtos'

export default props => {
    function obteLista() {
        return produtos.map (
            p => {
                return (
                    <Text key={p.id}>
                        {p.id}) {p.nome} preço R${p.preco}
                    </Text>
                )
            }
        )
    }
    return (
        <>
            <Text style={estilo.fontG}>Lista de produtos</Text>
            <Text>==============================</Text>
            {obteLista()}
        </>
    )
}