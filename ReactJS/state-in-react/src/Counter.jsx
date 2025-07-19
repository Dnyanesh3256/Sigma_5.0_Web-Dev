import { useState } from "react";



export default function Counter() {
    let [count, setCount] = (useState(0));

    function incCount() {
      setCount(count + 1);
    }
    
    return(
        <>
            <p>Count : {count}</p>
            <button onClick={incCount}>Count</button>
        </>
    )
}