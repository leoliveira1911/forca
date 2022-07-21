import { string } from "prop-types"

export default class LetterModel {
    #value: string
    #hidden: boolean
    #color: string
    

    constructor(value: string, hidden = false , color = 'gray') {
        this.#value = value
        this.#hidden = hidden
        this.#color = color
    }

    get value() {
        return this.#value
    }
    get hidden() {
        return this.#hidden
    }
    get color() {
        return this.#color
    }
    

    static revealed (value: string) {
        return new LetterModel(value, false)
    }

    static hidden (value: string) {
        return new LetterModel(value, true)
    }

    reveal(e) {
        if(this.value === e && this.#hidden === true)
        return new LetterModel(this.#value , false)
    }

    static fromArray(array) {
        for(let i = 0; i <= array.lenght ; i++) {
            return new LetterModel(array[i], false)
        }
    }
}