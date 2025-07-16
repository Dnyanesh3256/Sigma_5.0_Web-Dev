import Card from "./Card";
import "./CardTab.css"

function CardTab() {
    return(
        <>
            <div className="cards-container">
                <div className="one">
                    <h2>Blockbuster deals on Computer Accessories | Shop Now</h2>
                </div>
                <div className="two">
                    <Card title="Logitech MX Master 3S" desc="8000 DPI" idx={0}/>
                    <Card title="Apple Pencil (2nd Gen)" desc="Intuitive touch surface" oldPrice="11900" newPrice="9199" idx={1}/>
                    <Card title="Zebronics Zeb-Transformer" desc="Designed for iPad Pro" oldPrice="1599" newPrice="899" idx={2}/>
                    <Card title="Portronics Toad 23" desc="Wireless Mouse 2.4GHz" oldPrice="599" newPrice="278" idx={3}/>
                </div>
            </div>
        </>
    )
}

export default CardTab;