let paraOne = document.createElement('p');

paraOne.innerText = "Hey I'm red!";

paraOne.setAttribute("class", "red");

document.body.append(paraOne);


let headingThree = document.createElement('h3');

headingThree.innerText = "I'm a blue h3!";

headingThree.setAttribute("class", "blue");

document.body.append(headingThree);


let div = document.createElement('div');

let headingOne = document.createElement('h1');

let paraTwo = document.createElement('p');

headingOne.innerText = "I'm in a div";

paraTwo.innerText = "ME TOO!";

div.append(headingOne);

div.append(paraTwo);

div.classList.add("forDiv");

document.querySelector('body').append(div);