let inp = document.querySelector('#inp');
let btn = document.querySelector('#add');
let list = document.querySelector('#list')

let ul = document.querySelector('ul');

btn.addEventListener("click", function() {
    let li = document.createElement('li');
    li.innerText = inp.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete Task";
    deleteBtn.classList.add("deleteBtn");

    li.appendChild(deleteBtn);

    list.appendChild(li);

    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
