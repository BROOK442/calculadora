import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import estilo from '../../estilo'

export default ({num}) =>{
    return(
        <View style={style.Container}>
            <Text style={[estilo.fontG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container:{
        height: 50, 
        width: 50,
        backgroundColor: '#6959CD',
        margin: 5, 
        borderRadius: 25,
        alignItems: 'center',
        justifyContent:'center'
    }, 
    Num:{
        color:"#FFF"
    }
})