let url = "https://catfact.ninja/fact";

let p = document.querySelector("p");

let btn = document.querySelector("button");

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error : ", e);
        return "No fact found!!";
        p.style.display = "block";
    }
}

btn.addEventListener("click", async () => {
    let fact = await getFact();
    
    p.style.display = "block";

    p.innerText = fact;
})