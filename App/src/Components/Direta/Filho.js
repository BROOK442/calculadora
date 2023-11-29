import React from "react";
import { Text } from "react-native";

import estilo from "../../estilo";

export default props => {
    return(
        <>
        
            <Text style={estilo.fontG}>{props.a}</Text>
            <Text style={estilo.fontG}>{props.b}</Text>

        </>
    )
  

}