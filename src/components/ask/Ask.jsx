import { useState } from "react"
import QuestionAnswer from "../questionAnswer/QuestionAnswer"
import './Ask.css'

export default function Ask(props){
    const {number, ask, answer} = props

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

    function showAnswer(){
        setAskname('answer-active')
    }
    return(
        <>
            <section className={asktitle}>
                Pergunta {number} 
                <ion-icon name="play-outline" onClick={()=> {showAsk()}}></ion-icon>
            </section>

            <QuestionAnswer askname={askname} hideAsk={hideAsk} showAnswer={showAnswer} ask={ask} answer={answer}/>
        </>
    )
}