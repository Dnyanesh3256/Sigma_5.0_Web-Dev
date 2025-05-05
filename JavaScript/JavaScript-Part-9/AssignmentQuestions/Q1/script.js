// Q1

let btn = document.createElement('button');
let inp = document.createElement('input');

btn.innerText = "Click Me";

// Q2

inp.placeholder = "username";
btn.id = "btn";

// Q3

btn.style.backgroundColor = "blue";
btn.style.color = "white";

// Q4

let headingOne = document.createElement("h1");
headingOne.innerText = "DOM Practice";
headingOne.style.textDecoration = "underline";

//Q5

let para = document.createElement('p');
para.innerHTML = "Apna College <b> Delta </b> Practice";

document.querySelector('body').append(btn);
document.querySelector('body').append(inp);
document.querySelector('body').prepend(headingOne);
document.querySelector('body').append(para);


