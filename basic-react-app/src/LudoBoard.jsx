import { useState } from "react"

export default function LudoBoard(){

    let [move, setMove] = useState({blue:0, yellow:0, green:0, red:0});
    
    let updateBlue = ()=>{
        move.blue += 1
        setMove({...move});
       
    }
    let updateYellow = ()=>{
        move.yellow += 1
        setMove({...move});
       
    }
    let updateGreen = ()=>{
        move.green += 1
        setMove({...move});
       
    }
    let updateRed = ()=>{
        move.red += 1
        setMove({...move});
       
    }

    return(
        <div>
            <h1>Game Begins :</h1>
            <div className="board">
                <h3>Blue Move = {move.blue}</h3>
                <button className="blue" onClick={updateBlue}>+1</button>
                <h3>Yellow Move ={move.yellow}</h3>
                <button className="yellow" onClick={updateYellow}>+1</button>
                <h3>Green Move = {move.green}</h3>
                <button className="green" onClick={updateGreen}>+1</button>
                <h3>Red Move ={move.red}</h3>
                <button className="red" onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}