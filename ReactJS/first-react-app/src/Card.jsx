import "./Card.css"
import Price from "./Price";

function Card({ title, description, idx }) {
    let oldPrices = ["12495", "11900", "1599", "599"];
    let newPrices = ["8999", "9199", "899", "278"];

    description = ["8000 DPI", "Intuitive Surface", "Designed for iPad Pro", "wireless"];
    return(
        <>
            <div className="card-container">
                <h3>{title}</h3>
                <p>{description[idx]}</p>
                <hr />
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            </div>
        </>
    )
}

export default Card;