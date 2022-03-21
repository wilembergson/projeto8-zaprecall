import { useState } from "react"
import QuestionAnswer from "../questionAnswer/QuestionAnswer"
import './Ask.css'

export default function Ask(props){
    const {number, ask, answer, addAnswer} = props

    const [asktitle, setAsktitle] = useState('title-active')
    const [askname, setAskname] = useState('ask-disable')
    const [icon, setIcon] = useState(<ion-icon name="play-outline" onClick={()=> {showAsk()}}></ion-icon>)

    function showAsk(){
        setAsktitle('title-disable')
        setAskname('ask-active')
    }

    function showAnswer(){
        setAskname('answer-active')
    }
    function hideAnswer(){
        setAskname('answer-disable')
    }

    function responding(status){
        setAsktitle(`title-active ${status}`)
        if(status === 'green'){
            setIcon(<ion-icon name="checkmark-circle-sharp"></ion-icon>)
            addAnswer(<div className="green">
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </div>)
        }else if(status === 'red'){
            setIcon(<ion-icon name="close-circle-sharp"></ion-icon>)
            addAnswer(<div className="red">
                <ion-icon name="close-circle-sharp"></ion-icon>
            </div>)
        }else if(status === 'yellow'){
            setIcon(<ion-icon name="help-circle-sharp"></ion-icon>)
            addAnswer(<div className="yellow">
                <ion-icon name="help-circle-sharp"></ion-icon>
            </div>)
        }
    }

    return(
        <>
            <section className={asktitle}>
                Pergunta {number} 
                {icon}
            </section>
            <QuestionAnswer askname={askname} showAnswer={showAnswer} hideAnswer={hideAnswer} ask={ask} answer={answer} responding={responding}/>
        </>
    )
}