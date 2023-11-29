import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";

export default props => (
    <Text style={ estilo.fontG }>O valor { props.max } é maior que { props.min }</Text> //Componente com propriedade | Ele recebe algum valor!
);