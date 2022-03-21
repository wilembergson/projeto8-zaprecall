import './MainScreen.css'
import { deck1 } from '../../decksData/DecksData.js'
import Ask from '../ask/Ask'
import { useState } from 'react'

export default function MainScreen(){
    const deck = [...deck1]
    const [answereds, setAnswereds] = useState([])

    function addAnswer(icon){
        console.log(answereds)
        setAnswereds([...answereds, icon])
        console.log(answereds)
    }

    function loadAsks(list){
        const elements = []
        for(let i=0; i<list.length; i++){
            elements.push(<Ask number={i+1} ask={list[i].ask} answer={list[i].answer} addAnswer={addAnswer}/>)
        }
        return elements
    }

    deck.sort(comparator)

    return(
        <div className="mainScreen">
            <header>
                <img src="images/logo-pequeno.png"/>
                <text>ZapRecall</text>
            </header>

           {loadAsks(deck)}

            <footer>
                {answereds.length}/{deck.length} CONCLUÍDOS
                <div className='icons'>{answereds}</div>
            </footer>
        </div>
    )
}

function comparator() { 
	return Math.random() - 0.5; 
}

