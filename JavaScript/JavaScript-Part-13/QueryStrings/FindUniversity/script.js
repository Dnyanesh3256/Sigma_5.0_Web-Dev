let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn");

async function getUniversity(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("Error : ", e);
        return [];
    }
}

function showUniversity(universityArr){
    let list = document.querySelector("#list");
    list.innerText = "";

    for(university of universityArr){
        let li = document.createElement("li");
        li.innerText = university.name;
        list.appendChild(li);
    }
}

btn.addEventListener("click", async () => {
    let country = document.querySelector("#inpC").value;

    let universityArr = await getUniversity(country);
    showUniversity(universityArr);
})



