let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//     } catch(e){
//         console.log("Error : ", e);
//     };
// }

// getFacts();



async function getFacts() {
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log(data2.fact);
    } catch(e){
        console.log("Error : ", e);
    };
}

getFacts();