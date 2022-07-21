import LetterModel from "../model/letter"
import Word from "./Word"
import { useRouter } from 'next/router'

interface WinProps {
    word: LetterModel[]
}

export default function Win(props:WinProps) {
    const word = props.word
    const router = useRouter()
    function restart() {
        router.reload()
      }

    return(
        <div className="flex flex-col justify-center items-center
        h-screen w-screen bg-slate-600">
            <h1>PARABÉNS, VOCÊ VENCEU! A PALAVRA CERTA É: </h1>
            <Word word={word}/>
            <button onClick={restart}>Reiniciar Jogo</button>
        </div>
    )
}