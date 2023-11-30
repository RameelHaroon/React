import React from "react"
import {nanoid} from "nanoid"
import Die from "./component/Die"

export default function App() {


    const [dice,setDice] = React.useState(allNewDice())
    const [tenzies,setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
             return die.isHeld ? 
                 die :{
                 value: Math.ceil(Math.random() * 6),
                 isHeld: false,
                 id: nanoid()
                 }
                 
         }))
     }
    
     function newGame(){
        setDice(allNewDice)
        setTenzies(false)
     }
    const diceElements = dice.map(die => (
        <Die key={die.id} value={die.value} isHeld={die.isHeld}  holdDice={() => holdDice(die.id)} />
    ))
    return (
        <main>
            
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={tenzies ? newGame : rollDice}> {tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}