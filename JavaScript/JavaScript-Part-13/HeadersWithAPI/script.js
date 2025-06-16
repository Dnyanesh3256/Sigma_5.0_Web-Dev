let url = "https://icanhazdadjoke.com/";

let btn = document.querySelector("button");
let p = document.querySelector("p");

async function getJoke(){
    try{
        let head = { headers : {Accept : "application/json"} };
        let res = await axios.get(url, head);
        return res.data.joke;
    }catch(e){
        console.log("Error : ", e);
        return "No joke found";
        p.style.display = "block";
    }
}

btn.addEventListener("click", async () => {
    let joke = await getJoke();
    p.innerText = joke;
    p.style.display = "block";
})
