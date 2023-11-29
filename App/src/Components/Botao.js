import React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

export default props => {
    const executar = () => {
        console.warn('Execução 01');
    };

    return (
        <SafeAreaView>
            <Button title="Executar 01!" onPress={executar} />
            <Button title="Executar 02!" onPress={function(){console.warn('Execução 02!')}} />
            <Button title="Executar 03!" onPress={()=>console.warn('Execução 03!')} />
        </SafeAreaView>
    )
}