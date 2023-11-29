import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import If from "./if";

export default props => {
    const usuario = props.usuario || {}

    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.fontG}>Usuário logado</Text>
                <Text style={estilo.fontG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}