export default function Price({ oldPrice, newPrice }) {
    return(
        <div>
            <span>&#x20B9;{oldPrice}</span>
            &nbsp;&nbsp;
            <span>&#x20B9;{newPrice}</span>
        </div>
    )
}