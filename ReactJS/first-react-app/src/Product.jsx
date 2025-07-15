import "./assets/Product.css";

function Product({title, features}) {
    let list = features.map((feature) => <li>{feature}</li>)
    return (
        <>
            <h2>{title}</h2>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
        </>
    )
}

export default Product;