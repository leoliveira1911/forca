import Word from '../components/Word'
import AllLetters from '../components/AllLetters'
import LetterModel from '../model/letter'
import { useEffect, useState } from 'react'
import stringToLetterModel from './api/words'
import Win from '../components/Win'
import { useRouter } from 'next/router'
import Lose from '../components/Lose'

export default function Home() {
  const router = useRouter()
  const [word, setWord] = useState<LetterModel[]>()
  const [mistakes, setMistakes] = useState<LetterModel[]>([])
  const [win, setWin] = useState(false)

  useEffect(() => {
    setWord(stringToLetterModel)
    setMistakes([])
  }, [])

  function reveal(e) {
    const newWord = []
    word.map((letter) => {
      if (letter.value === e) {
        newWord.push(new LetterModel(e, false, 'green'))
      } else {
        newWord.push(letter)
      }
    })
    setWord(newWord)
    revealWrong(e)
    counter()
  }


  function counter() {
    const right = []
    word?.map((letter) => {
      if (!letter.hidden) {
        right.push(letter)
      }
    })
    return right
  }

  function revealWrong(e) {
    const noRep = []
    const rightLetters = []
    word.map((letter) => {
      rightLetters.push(letter.value)
    })
    mistakes.map((letter) => {
      noRep.push(letter.value)
    })
    if (!rightLetters.includes(e) && !noRep.includes(e)) {
      setMistakes([...mistakes, new LetterModel(e, false, 'red')])
    }
    return mistakes.length
  }

  return (
    mistakes.length < 5 ? counter()?.length === word?.length ? (
      <Win word={word}/>
    ) : (
      <div className='flex flex-col items-center justify-center h-screen bg-neutral-800'>
        <div className={`
    flex flex-col items-center justify-center
    `}>
          <Word word={word} />
          <hr className='h-2' />
          <Word word={mistakes} />
          <hr className='h-4' />
        </div>
        <div>
          <AllLetters onClick={(e) => reveal(e)} />
        </div>
      </div>
    ) : (
      <Lose word={word}/>
    )
  ) 
}

