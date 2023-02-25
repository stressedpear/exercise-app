// from John Murrey with permission on discord
import React, { useCallback, useState, useEffect } from "react"

let currentTimer = 0
export default function DurationExercise ({exercise, setMenuScreen}) {
    let [running, setRunning] = useState(false)
    let [timer, setTimer] = useState(0)
    let updateTimer = useCallback(() => {
        if(running) {
            setTimer((timer) => timer+10)
        }
    }, [running])

    useEffect(() => {
        currentTimer = setInterval(updateTimer, 10)
        return () => clearInterval(currentTimer)
    } , [running])

    let startStop = useCallback(() => {
        setRunning(!running)
        clearInterval(currentTimer)
    }, [running])

    let reset = useCallback(() => {
        setTimer(0)
    })
    
    let mins = (Math.floor((timer / (1000*60)) % 60)).toString().padStart(2, "0")
    let secs = (Math.floor((timer / 1000) % 60 )).toString().padStart(2, "0")
    let mills = (timer % 1000).toString().padStart(3, "0") 

    return(
        <div>
            <h1>{exercise.name}</h1>
            <p>{mins} : {secs} : {mills}</p>
            <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
            <button onClick={ () => {setTimer(0)}}>Reset</button>
            <button onClick={setMenuScreen}>menu</button>
        </div>
    )
}
