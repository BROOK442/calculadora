import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from './Components/Input';
import Button from './Components/Button';
import Header from './Components/Header';
import { globalStyles } from './styles';

/*\d: Um caractere de classe de caracteres em regex que representa qualquer dígito decimal (0 a 9).*/

export default function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => { /*recebe value | representa o valor associado ao botão pressionado na calculadora*/
    if (value === '=') {
      try { /* Eval | Executa a expressão matemática representada como uma string*/
        const evalResult = eval(inputText.replace(',', '.')); /* Substitui vírgulas por pontos */
        setResult(evalResult.toString());
        setInputText(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (/\d/.test(value) || value === '0') { /*Verifica se o valor do botão pressionado é um dígito (0-9) ou '0'*/
      setInputText((prev) => (prev === '0' ? value : prev + value));
    } else if (value === '.' && /\d*\.\d*$/.test(inputText)) { /*Verifica se o valor do botão é um ponto e se o inputText já contém um ponto decimal*/
      // Permite apenas um ponto decimal
      return;
    } else if (/[+\-*\/]/.test(value)) { /*Verifica se o valor do botão pressionado é um dos operadores matemáticos*/
      // Adiciona o sinal apenas se o último caractere não for um sinal
      setInputText((prev) => {
        const lastChar = prev.slice(-1);
        return /\d/.test(lastChar) ? prev + value : prev.slice(0, -1) + value;
      });
    } else if (value === '.') {
      // Adiciona o ponto decimal se o último caractere não for um ponto
      setInputText((prev) => (/\d*\.$/.test(prev) ? prev : prev + value));
    }
  };

  return (
    <View style={globalStyles.container}>
       <Header /> 

      <Input
        value={inputText}
        placeholder=""
        onChangeText={(text) => setInputText(text)}
      />

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('7')} text="7" />
        <Button onPress={() => handleButtonPress('8')} text="8" />
        <Button onPress={() => handleButtonPress('9')} text="9" />
        <Button onPress={() => handleButtonPress('+')} text="MAIX" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('4')} text="4" />
        <Button onPress={() => handleButtonPress('5')} text="5" />
        <Button onPress={() => handleButtonPress('6')} text="6" />
        <Button onPress={() => handleButtonPress('-')} text="MENUS" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('1')} text="1" />
        <Button onPress={() => handleButtonPress('2')} text="2" />
        <Button onPress={() => handleButtonPress('3')} text="3" />
        <Button onPress={() => handleButtonPress('*')} text="VEZIZ" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('.')} text="." />
        <Button onPress={() => handleButtonPress('0')} text="0" />
        <Button onPress={() => handleButtonPress('')} text="🐼" />
        <Button onPress={() => handleButtonPress('/')} text="DIVIDIDU" buttonStyle={globalStyles.operationButton} />
      </View>

      <View style={globalStyles.row}>
        <Button onPress={() => handleButtonPress('=')} text="É INGUAL" buttonStyle={globalStyles.operationButton} />
        <Button onPress={() => setInputText('')} text="APAGUI" buttonStyle={globalStyles.operationButton} />
      </View>
    </View>
  );
}
