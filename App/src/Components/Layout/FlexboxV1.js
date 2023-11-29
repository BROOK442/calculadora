import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="#6A5ACD"/>
            <Quadrado cor="#836FFF"/>
            <Quadrado cor="#6959CD"/>
            <Quadrado cor="#483D8B"/>
            <Quadrado cor="#191970"/>
        </View>
    )
}

const style = StyleSheet.create ({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    }
})