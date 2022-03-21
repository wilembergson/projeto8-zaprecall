import './MainScreen.css'
import { deck1 } from '../../decksData/DecksData.js'
import Ask from '../ask/Ask'
import { useEffect, useState } from 'react'

const ans = []
export default function MainScreen(){
    const deck = [...deck1]
    const [answereds, setAnswereds] = useState([])
    const [starter, setStarter] = useState('starter')
    const [finalMensage, setFinalMensage] = useState('final-mensage disable')
    const [finalMensageKey, setFinalMensageKey] = useState(<section>
        <div className='image-status'>
            <img src="images/party.png"/>
            <strong> Parabéns!</strong>
        </div>
        <div>Você não esqueceu de nenhum flashcard.</div>
    </section>)

    useEffect(()=>{
        if(answereds.length === deck.length){
            answereds.forEach(n =>{
                if(n.props.className === 'red'){
                    setFinalMensageKey(<section>
                        <div className='image-status'>
                            <img src="images/sad.png"/>
                            <strong> Putz!</strong>
                        </div>
                        <div>Ainda faltam alguns... Mas não desanime!</div>
                    </section>)
                }
            })
            setStarter('disable')
            setFinalMensage('final-mensage')
        }
    },[answereds])

    function addAnswer(icon){
        setAnswereds([...answereds, icon])

    }
 
    function loadAsks(list){
        const elements = []
        for(let i=0; i<list.length; i++){
            elements.push(<Ask number={i+1} ask={list[i].ask} answer={list[i].answer} addAnswer={addAnswer} answereds={answereds} deck={deck} setFinalMensageKey={setFinalMensageKey}/>)
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
                <div className={starter}>
                    {answereds.length}/{deck.length} CONCLUÍDOS
                </div>
                <div className={finalMensage}>
                    {finalMensageKey}
                </div>
                <div className='icons'>{answereds}</div>
            </footer>
        </div>
    )
}

function comparator() { 
	return Math.random() - 0.5; 
}

