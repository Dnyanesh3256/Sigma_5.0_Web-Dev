import { useState } from "react"

export default function CommentsForm({ addNewComment }){
    const [ formData, setFormData ] = useState({
        username: "",
        remarks: "",
        rating: 5
    })

    const handleInputChange = (e) => {
        setFormData((currData) => {
            return {...currData, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewComment(formData);
        console.log(formData);

        setFormData({
            username: "",
            remarks: "",
            rating: 5
        })
    }
    return (
        <>
            <h2>Give a comment!</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" placeholder="enter username" value={formData.username} onChange={handleInputChange} />

                <br /><br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea name="remarks" id="remarks" placeholder="add few remarks" onChange={handleInputChange} value={formData.remarks}></textarea>

                <br /><br />

                <label htmlFor="rating">Rating : </label>
                <input type="number" name="rating" id="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />

                <br /><br />

                <button>Add Comment</button>
            </form>
        </>
    )   
}