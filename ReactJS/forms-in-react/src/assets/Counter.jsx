import { useState, useEffect } from "react"

export default function Counter() {
    const [countX, setCountX] = useState(0);
    const [countY, setCountY] = useState(0);

    let incCountX = () => {
        setCountX((prevCountX) => prevCountX+1);
    }

    let incCountY = () => {
        setCountY((prevCountY) => prevCountY+1);
    }

    useEffect(function effect() {
        console.log("useEffect is used!");
    }, [countX]);

    return(
        <div>
            <h2>CountX : {countX}</h2>
            <button onClick={incCountX}>X+1</button>

            <hr />

            <h2>CountY : {countY}</h2>
            <button onClick={incCountY}>Y+1</button>
        </div>
    )
}