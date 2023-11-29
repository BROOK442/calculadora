import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0:{
        backgroundColor: '#9370DB',
        height:300
    },
    V1:{
        backgroundColor: '#8A2BE2',
        flexGrow: 3 // Ocupa 3 partes
    },
    V2:{
        backgroundColor: '#4B0082',
        flexGrow: 1
    }
})