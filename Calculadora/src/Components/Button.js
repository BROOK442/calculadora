import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles';

const Button = ({ onPress, text, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[globalStyles.button, buttonStyle]}>
    <Text style={[globalStyles.buttonText, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
