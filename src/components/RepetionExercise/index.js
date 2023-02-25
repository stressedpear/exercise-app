// resource used to increment count 
// https://contactmentor.com/react-increment-counter-hooks/

import React, { useState } from "react"

export default function RepetitionExercise ({exercise, setMenuScreen}) {
    let [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count++)
    }
    const handleReset = () => {
        setCount(count = 0)
    }
    return(
        <div>
        <h1>{exercise.name}</h1>
        <p>Reps: {count}</p>
        <button onClick={handleCount}>Increase Reps</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={setMenuScreen}>Return to Menu</button>
        </div>
    )   
}
