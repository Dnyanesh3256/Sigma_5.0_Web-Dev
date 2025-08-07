import { useState, useEffect } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    let incCount = () => {
        setCount((prevCount) => prevCount+1);
    }

    useEffect(function effect() {
        console.log("useEffect is used!");
    });
    
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={incCount}>+1</button>
        </div>
    )
}