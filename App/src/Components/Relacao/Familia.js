import React from "react";
import { Text } from "react-native";

export default props => {
    return (
        <>
            <Text>Inicio 'Membros da Familia</Text>
            {props.children} {/*Serve para pegar os dados dos filhos | Sem precisar importar o componente 'Filho'*/}
            <Text>Fim 'Membros da Familia</Text>
        </>
    )
}