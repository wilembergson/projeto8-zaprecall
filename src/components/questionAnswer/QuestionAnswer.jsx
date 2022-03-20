import React from "react"
import './QuestionAnswer.css'

export default function QuestionAnswer(props){
    const {askname, showAnswer, hideAnswer, ask, answer, responding} = props
    let page = null

    function sendAnswerRed(){
        hideAnswer()
        responding('red')
    }
    function sendAnswerYellow(){
        hideAnswer()
        responding('yellow')
    }
    function sendAnswerGreen(){
        hideAnswer()
        responding('green')
    }

    if(askname === 'ask-active'){
        page = <>
                    {ask}
                    <img src="images/setinha.png" onClick={() => showAnswer()}/>
                </>
    }else if(askname === 'answer-active'){
        page = <>
                    {answer}
                    <div className="buttons">
                        <button className="b-red" onClick={sendAnswerRed}>Não lembrei</button>
                        <button className="b-yellow" onClick={sendAnswerYellow}>Quase não lembrei</button>
                        <button className="b-green" onClick={sendAnswerGreen}>Zap</button>
                    </div>
                </>
    }

    return(
        <div className={askname}>
            {page}
        </div>
    )
}