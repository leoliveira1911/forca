import LetterModel from "../model/letter"
import Letter from "./Letter"


interface WordProps {
    word?: LetterModel[]
}

export default function Word(props: WordProps) {

   
    return (
        <div className={'flex'}>
            {props.word?.map((letter, i) => {
                return (
                    <Letter key={i} letter={letter} />
                )
            })}

        </div>
    )
}