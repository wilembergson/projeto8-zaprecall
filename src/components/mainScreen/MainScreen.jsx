import './MainScreen.css'
import { deck1 } from '../../decksData/DecksData.js'

export default function MainScreen(){
    const deck = [...deck1]
    deck.sort(comparator)

    return(
        <div className="mainScreen">
            <header>
                <img src="images/logo-pequeno.png"/>
                <text>ZapRecall</text>
            </header>

           {deck.map(e => 
               <div>{e.ask}</div>
           )}

            <footer>0/4 CONCLUÍDOS</footer>
        </div>
    )
}

function comparator() { 
	return Math.random() - 0.5; 
}