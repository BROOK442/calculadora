import React, {  useState }  from 'react'
import { Text, Button } from 'react-native'
import estilo from '../estilo'

export default ( {inicial = 0, passo = 1} ) => {
    const [ numero, setNumero ] = useState(inicial)
    const inc = () => setNumero(numero+passo) // Para incrementar
    const dec = () => setNumero(numero-passo) // Para decrescer

    return (
        <>
            <Text style={estilo.fontG}>{ numero }</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}