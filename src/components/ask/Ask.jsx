import { useState } from "react"
import './Ask.css'

export default function Ask(props){
    const [asktitle, setAsktitle] = useState('title-active')
    const [askname, setAskname] = useState('ask-disable')
    return(
        <>
            <section className={asktitle} onClick={()=>{
                setAsktitle('title-disable')
                setAskname('ask-active')
            }}>Pergunta {props.number} <ion-icon name="play-outline"></ion-icon></section>

            <div className={askname} onClick={()=>{
                setAsktitle('title-active')
                setAskname('ask-disable')
            }}>{props.ask}</div>
        </>
    )
}