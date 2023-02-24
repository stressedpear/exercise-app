// resource used to increment count 
// https://contactmentor.com/react-increment-counter-hooks/

import React, { useState } from "react"

export default function RepetitionExercise () {
    let [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(count++)
    }
    const handleReset = () => {
        setCount(count = 0)
    }
    return(
        <div>
        <h1>Push-ups</h1>
        <p>Reps: {count}</p>
        <button onClick={handleCount}>Increase Reps</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    )   
}
