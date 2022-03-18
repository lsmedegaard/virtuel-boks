import React from "react";
import { useState } from "react";
import "../scss/buttons.scss"




function Button (props) {
    
    const [show, setShow] = useState(false)
    const [text, setText] = useState(props.defaultText)

    const onClick = () => {
        const error = props.updateSettings()
        if (error) return
        setShow(!show)
        setText(text === props.defaultText ? props.changeText : props.defaultText)
    }
    

    return (
        <div className="buttons-container">
            <button onClick={onClick}>{text}</button>
        </div>
    )
}


export default Button