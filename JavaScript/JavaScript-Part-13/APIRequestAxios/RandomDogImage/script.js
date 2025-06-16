let url = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#res");
let btn = document.querySelector("button");

async function getImage() {
    try{
        let resp = await axios.get(url);
        return resp.data.message;
    }catch(e){
        console.log("Error : ", e)
        return "No Dog Image Found";
    }
}

btn.addEventListener("click", async () => {
    let link = await getImage();
    img.setAttribute("src", link);
    img.style.display = "block";
})

