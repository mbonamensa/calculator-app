import { useState } from "react"



function NumberBtn(props) {

    

    return (
        <button 
            className={`number-btn ${props.className || ""}`} 
            onClick={() => props.appendNumber(props.number)}>
            {props.number}
        </button>
    )
}

export default NumberBtn