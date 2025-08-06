import { useState } from "react"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import "./Lottery.css"

export default function Lottery({ n, winCondition }){
    const [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return(
        <>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>

            <Button action={buyTicket}/>

            <h2>{isWinning && "Congratulations, you won!"}</h2>
        </>
    )
}