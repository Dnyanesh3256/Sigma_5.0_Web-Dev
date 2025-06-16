let h1 = document.querySelector("h1");

let jsonRes = '{"fact":"Cats must have fat in their diet because they can not produce it on their own.","length":76}';

let validRes = JSON.parse(jsonRes);

h1.innerText = validRes.fact;