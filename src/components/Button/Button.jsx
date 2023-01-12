import React from "react";
import "./button.css";

export default function Button(props) {
    //  React.useState()
    let [colorState, setColorState] = React.useState("purple");

    let styleButton = {
        padding: props.padding,
        backgroundColor: colorState,
    };

    function handleClick(evt) {
        console.log("Evento click");
        // colorState = "black";
        //para cambiar el color del boton
        setColorState("grey");
    }

    return (
        <button onClick={handleClick} style={styleButton} className="btn">
            {props.children}
        </button>
    );
};


