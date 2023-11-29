import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      editable={false} // Desabilita a edição e seleção de texto
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: .5,
    width: '100%',
    fontSize: 100,
    textAlign: 'right',
    borderBottomWidth: 1, // Adicione uma borda inferior
    borderColor: 'lime',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    elevation: 3,
    color: 'lime'
  },
});
