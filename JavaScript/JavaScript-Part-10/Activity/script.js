let btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let heading = document.querySelector('h2');

    finalColor = getRandomColor()
    heading.innerText = finalColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = finalColor;
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;

    return randomColor;
}