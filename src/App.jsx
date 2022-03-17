import InicialScreen from "./components/initialScreen/InitialScreen";
import "./App.css"
import MainScreen from "./components/mainScreen/MainScreen";

export default function App(){
    return(
        <main>
            <InicialScreen/>
            <MainScreen/>
        </main>
    )
}