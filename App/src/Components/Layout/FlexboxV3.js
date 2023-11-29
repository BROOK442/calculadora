import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#32CD32" lado={50} alt={20} bordar={0}/>
            <Quadrado cor="#32CD32" lado={70} alt={20} bordar={0}/>
            <Quadrado cor="#32CD32" lado={90} alt={20} bordar={0}/>
            <Quadrado cor="#32CD32" lado={110} alt={20} bordar={0}/>
            <Quadrado cor="#32CD32" lado={130} alt={20} bordar={0}/>
            <Quadrado cor="#32CD32" lado={150} alt={20} bordar={0}/>
            <Quadrado cor="#8B4513" lado={40} alt={20} bordar={0}/>
            <Quadrado cor="#8B4513" lado={50} alt={20} bordar={0}/>
        </View>
    )
}

const style = StyleSheet.create ({
    FlexV3:{
        flexDirection: 'column',
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000'
    }
})
