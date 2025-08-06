import './App.css'
import Lottery from './assets/Lottery'
import Ticket from './assets/Ticket'
import { sum } from "./assets/helper"

function App() {
  let condition = (ticket) => {
    return sum(ticket) === 15;
  }
  return (
    <>
      <Lottery n={3} winCondition={condition} />
    </>
  )
}

export default App
