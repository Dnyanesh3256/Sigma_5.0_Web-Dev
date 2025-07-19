import { useState } from "react"

export default function LudoBoard() {
    let [ moves, setMoves ] = useState({blue: 0, yellow: 0, red: 0, green: 0});

    let updateBlue = () => {
        setMoves((preMoves) => {
            return { ...preMoves, blue: preMoves.blue + 1 }
        });
    };

    let updateYello = () => {
        setMoves((preMoves) => {
            return {...preMoves, yellow: moves.yellow + 1};
        });
    };

    let updateRed = () => {
        setMoves((preMoves) => {
            return {...preMoves, red: moves.red + 1};
        });
    };

    let updateGreen = () => {
        setMoves((preMoves) => {
            return {...preMoves, green: moves.green + 1};
        });
    }
    return(
        <>
            <h2>Ludo Board : </h2>

            <p>Game begins!</p>

            <br />

            <p>Blue Moves Count : {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>

            <p>Yellow Moves Count : {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYello}>+1</button>

            <p>Red Count Moves : {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>

            <p>Green Count Moves : {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
        </>
    )
}