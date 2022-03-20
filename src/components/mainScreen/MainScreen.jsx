import './MainScreen.css'
import { deck1 } from '../../decksData/DecksData.js'
import Ask from '../ask/Ask'

export default function MainScreen(){
    const deck = [...deck1]
    deck.sort(comparator)

    return(
        <div className="mainScreen">
            <header>
                <img src="images/logo-pequeno.png"/>
                <text>ZapRecall</text>
            </header>

           {loadAsks(deck)}

            <footer>0/4 CONCLUÍDOS</footer>
        </div>
    )
}

function comparator() { 
	return Math.random() - 0.5; 
}

function loadAsks(list){
    const elements = []
    for(let i=0; i<list.length; i++){
        elements.push(<Ask number={i+1} ask={list[i].ask} answer={list[i].answer}/>)
    }
    return elements
}