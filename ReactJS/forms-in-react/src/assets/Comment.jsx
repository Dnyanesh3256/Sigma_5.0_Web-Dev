import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";

export default function Comment(){
    const [ comments, setComments ]= useState([{
        username: "@dt",
        remarks: "well done!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("comment added!")
    }
    return(
        <>
            <div>
                <h2>All Comments</h2>

                {
                    comments.map((comment, idx) => (
                        <div className="comment" key={idx}>
                            <span>{comment.remarks}</span>
                            &nbsp; &nbsp;
                            <span>(rating : {comment.rating})</span>
                            <p>-{comment.username}</p>
                        </div>
                    ))
                }
            </div>

            <hr />

            <CommentsForm addNewComment={addNewComment} />
        </>
    )
}