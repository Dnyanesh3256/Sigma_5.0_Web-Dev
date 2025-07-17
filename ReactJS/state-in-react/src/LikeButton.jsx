import { useState } from "react"

export default function LikeButton() {
    const [ isLiked, setIsLiked ] = useState(false);

    function toggleLike(){
        setIsLiked(!isLiked);
    }

    let styles = {
        color: "red"
    }

    return(
        <>
            <div>
                <p onClick={toggleLike}>
                    { isLiked ? (
                        <i className="fa-solid fa-heart" style={styles}></i>
                        ) : (
                        <i className="fa-regular fa-heart"></i>
                        )
                    }
                </p>
            </div>
        </>
    )
}