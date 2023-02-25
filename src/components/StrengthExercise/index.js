// reference URL https://ibaslogic.com/simple-guide-to-react-form/

import React, {useState} from "react";

export default function StrengthExercise({exercise, setMenuScreen}){
    let [count, setCount] = useState(0)
    let [weight, setWeight] = useState("")
    const handleCount = () => {
        setCount(count++)
    }
    const handleReset = () => {
        setCount(count = 0)
        setWeight(weight = "")
    }
    const handleWeight = (event) => {
        setWeight(event.target.value)
    }
    return(
        <div>
            <h1>{exercise.name}</h1>
            <div>
                <form>
                    <label>Add Weight:</label><br></br>
                    <input type="text" name="addWeight" value={weight} onChange={handleWeight}/>
                </form>
            </div>
            <div>
               <p>Weight: {weight}lbs</p>
               <p>Reps: {count}</p>
               <button onClick={handleCount}>Increase Reps</button> 
               <button onClick={handleReset}>Reset</button>
               <button onClick={setMenuScreen}>Menu</button> 
            </div>
        </div>
    )
}