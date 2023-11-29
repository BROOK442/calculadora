import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor="#DDA0DD"/>
            <Quadrado cor="#EE82EE"/>
            <Quadrado cor="#DA70D6"/>
            <Quadrado cor="#FF00FF"/>
            <Quadrado cor="#FF00FF"/>
        </View>
    )
}

const style = StyleSheet.create ({
    FlexV2:{
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#000'
    }
})