import { useState } from "react"
import QuestionAnswer from "../questionAnswer/QuestionAnswer"
import './Ask.css'

export default function Ask(props){
    const [asktitle, setAsktitle] = useState('title-active')
    const [askname, setAskname] = useState('ask-disable')

    function hideAsk(){
        setAsktitle('title-active')
        setAskname('ask-disable')
    }

    function showAsk(){
        setAsktitle('title-disable')
        setAskname('ask-active')
    }
    return(
        <>
            <section className={asktitle} onClick={()=> {showAsk()}}>Pergunta {props.number} <ion-icon name="play-outline"></ion-icon></section>

            <QuestionAnswer askname={askname} hideAsk={hideAsk} ask={props.ask}/>
            
        </>
    )
}