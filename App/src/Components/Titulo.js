import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default function Titulo (props) {
    return (
        <>
            <Text estyle={estilo.fontG} >{props.principal}</Text>
            <Text estyle={estilo.fontG} >{props.secundario}</Text>
        </>
    )
}