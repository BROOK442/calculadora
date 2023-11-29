import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";


function Comp (){
    return <Text style={estilo.fontG}>Componente inicial</Text>;
}

function Comp2 (){
    return <Text style={estilo.fontG}>Componente 2</Text>;
}

function Comp3(){
    return <Text style={estilo.fontG}>Componente 3</Text>;
}

export {Comp2, Comp3};
export default Comp;