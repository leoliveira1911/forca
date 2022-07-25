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
            <img src={'https://i.gifer.com/ho.gif'} alt='CONGRATS, CHAMP' />
            <h1 className="text-2xl mt-5 mb-3">PARABÉNS, VOCÊ VENCEU! </h1>
            <Word word={word}/>
            <button onClick={restart} className={`
                bg-slate-200 m-2 px-3 py-2 rounded-lg text-lg
            `}>Tentar novamente</button>
        </div>
    )
}