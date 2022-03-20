import React from "react"
import './QuestionAnswer.css'

export default function QuestionAnswer(props){
    const {askname, hideAsk, showAnswer, ask, answer} = props
    const [askOrAnswer, setAskOrAnswer] = React.useState(null)
    let page = null

    if(askname === 'ask-active'){
        page = <>
                    {ask}
                    <img src="images/setinha.png" onClick={() => showAnswer()}/>
                </>
    }else if(askname === 'answer-active'){
        page = <>
                    {answer}
                </>
    }

    return(
        <div className={askname}>
            {page}
        </div>
    )
    /*
    if(askname === 'ask-active'){
        
        page = <div className={askname}>
                            {ask}
                            <img src="images/setinha.png" onClick={() => showAnswer()}/>
                        </div>
        
    }else if(askname === 'answer-active'){
        page = <div className={askname}>
                            {answer}
                        </div>
    }

    

    return page*/
}