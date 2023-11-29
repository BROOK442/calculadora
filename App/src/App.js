import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlexboxV4 from './Components/Layout/FlexboxV4';
import Mega from './Components/Mega/Mega';
export default function App() { 
  return (
    <SafeAreaView style={styles.container}>    
      <Mega qtdeNumero={6}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});