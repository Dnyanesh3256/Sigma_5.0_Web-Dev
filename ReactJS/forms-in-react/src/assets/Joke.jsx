import { useEffect, useState } from "react";

export default function Joke(){
    const [joke, setJoke] = useState({});

    let URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    }

    useEffect(() =>  { async function getFirstJoke() {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        console.log(jsonRes);
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    }
    getFirstJoke()
    }, []);

    
    return(
        <div>
            <h2>Joke 👇 </h2>
            <div>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>
            <button onClick={getJoke}>Get New Joke</button>
        </div>
    )
}