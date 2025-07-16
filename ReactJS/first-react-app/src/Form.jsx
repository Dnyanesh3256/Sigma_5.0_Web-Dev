function sendData(event) {
    event.preventDefault();
    console.log("data sent!");
}

export default function Form() {
    return(
        <form action="" onSubmit={sendData}>
            <input type="text" placeholder="enter something"/>
            <button>Submit</button>
        </form>
    )
}