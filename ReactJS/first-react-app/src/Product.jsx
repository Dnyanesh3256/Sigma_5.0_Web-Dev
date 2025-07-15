import "./assets/Product.css";

function Product({title, features, price}) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount ? "orange" : "" };

    return (
        <>
            <div className="Product" style={styles}>
                <h1>{title}</h1>
                <p>Price : {price}</p>
                {isDiscount ? <p>Discount : 5%</p> : null}
            </div>
        </>
    )
}

export default Product;