export default function QuestionAnswer(props){

    return(
        <div className={props.askname} onClick={()=> props.hideAsk()}>
            {props.ask}
            <img src="images/setinha.png"/>
        </div>
    )
}