import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import estilo from '../estilo'

export default ({ min,max }) => {
  const conta = max - min - 1
  const aleatorio = parseInt(Math.random() * conta) + min

  return (
    <Text style={estilo.fontD} >Número sorteado: { aleatorio }</Text>
  );
}

//let numeroAleatorio = Math.floor(Math.random() * todasFrases [categoriaSelecionada].frases.length)
