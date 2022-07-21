import LetterModel from "../model/letter"
import Word from "./Word"
import { useRouter } from 'next/router'

interface LoseProps {
    word: LetterModel[]
}

export default function Lose(props:LoseProps) {
    const word = props.word
    const router = useRouter()
    function restart() {
        router.reload()
      }
    const revealed = [] 
    word.map((letter) => {
        revealed.push(new LetterModel(letter.value, false, 'red'))
    })  
    return(
        <div className="flex flex-col justify-center items-center
        h-screen w-screen bg-slate-600">
            <h1>OPS, VOCÊ PERDEU! A PALAVRA CERTA ERA: </h1>
            <Word word={revealed}/>
            <button onClick={restart}>Tentar novamente</button>
        </div>
    )
}