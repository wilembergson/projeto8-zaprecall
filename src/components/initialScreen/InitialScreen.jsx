import { useState } from "react"
import "./InitialScreen.css"

export default function InicialScreen(){
    const [state, setState] = useState('active')
    return(
        <div className={state}>
            <img src="images/logo.png"/>
            <text>ZapRecall</text>
            <button onClick={()=> setState('none')}>Iniciar Recall!</button>
        </div>
    )
}