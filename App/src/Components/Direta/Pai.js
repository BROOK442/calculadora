import React from "react";
import Filho from "./Filho.js"

export default props => {
    let x = 10
    let y = 100
    return(
        <>
            <Filho a={x} b={y}/>
            <Filho a={x+100} b={y+200}/>
        </>

    )
}