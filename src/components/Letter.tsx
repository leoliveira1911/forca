import LetterModel from '../model/letter'

interface LetterProps {
    className?: string
    letter: LetterModel
    onClick?:(e:string) => void
    key?: any
}

export default function Letter(props: LetterProps) {
    const letter = props.letter
    return ( 
        letter.hidden ? (
            <div  className={`
                w-10 h-14 bg-gray-300 rounded-lg m-3
                flex justify-center items-center
                text-4xl 
            `}/>
        ) : (
        <div onClick={() => props.onClick?.(letter.value)} className={`
            w-10 h-14 bg-${letter.color}-300 rounded-lg m-3
            flex justify-center items-center
            text-4xl ${props.className}
        `}>
            <h1>
                {letter.value}
            </h1>
        </div>
        )
    )
}