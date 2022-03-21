import { useState } from "react"
import "./InitialScreen.css"
import Logo from "../../images/logo.png"

export default function InicialScreen(){
    const [state, setState] = useState('active')
    return(
        <div className={state}>
            <img src={Logo}/>
            <text>ZapRecall</text>
            <button onClick={()=> setState('none')}>Iniciar Recall!</button>
        </div>
    )
}