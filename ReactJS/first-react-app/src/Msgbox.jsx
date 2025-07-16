function sayHello({username, color}) {
    let styles = {color: color};
    
    return(
        <>
            <div style={styles}>
                <h2>I am @{username}</h2>
            </div>
        </>
    )
}

export default sayHello;