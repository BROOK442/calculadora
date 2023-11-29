import React from 'react'
import { Text } from 'react-native'
import { View, StyleSheet } from 'react-native'

export default props => {
    const lado = props.lado || 50
    const bordar = props.bordar
    const alt = props.alt
    return (
        <View style={{
            height: alt,
            width: lado,
            backgroundColor:props.cor || '#000',
            borderRadius: bordar,
        }}
        />
    )
}