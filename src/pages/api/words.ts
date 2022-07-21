import LetterModel from "../../model/letter"


function stringToLetterModel() {
    const words = [
        'banana',
        'santinha',
        'brasil',
        'argentina',
        'javascript',
        'pentelho',
        'miyagido',
        'starwars',
        'darthvader',
        'obiwan',
        'harrypotter',
        'blitz',
        'portugal',
        'mediterraneo',
        'pacifico',
        'lalaland',
        'hercules',
        'sofa'
    ]

    let rand = Math.floor(Math.random() * (words.length - 0)) 

    let word = words[rand]
    let wordArray = [...word] 
    console.log(word)
    let letterModelArray = []

    wordArray.map((letter)=>{
        let newLetter = new LetterModel(letter, true)
        letterModelArray = [...letterModelArray, newLetter]
    })

    return letterModelArray


}

export default stringToLetterModel()