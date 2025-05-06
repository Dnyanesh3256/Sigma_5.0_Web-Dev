let btn = document.createElement("button");
btn.innerText = "I'm JS Button";
btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
});

document.querySelector('body').append(btn);