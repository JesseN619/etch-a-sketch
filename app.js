let container = document.getElementById("container");

function createSquares(squaresPerSide, type) {
    let totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 1; i <= totalSquares; i++) {
        let newDiv = document.createElement("div");
        container.appendChild(newDiv);
        newDiv.className = "squares";

        if (type == 'basic') {
            newDiv.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "black";
            }
            )
        }

        if (type == 'colorful') {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let rgbValue = "rgb(" + r + ", " + g + ", " + b + ")";
            newDiv.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = rgbValue;
            })
        }
    }
}

function reset(type) {
    removeElementsByClass('squares');
    let squaresPerSide =
        parseInt(prompt("Enter the number of squares per side. Must be an integer."));
    //check that it's an INT
    if (!Number.isInteger(squaresPerSide)) {
        alert('You must enter an integer.');
    }
    //check <=100
    if (squaresPerSide > 100) {
        alert('You must enter an integer less than or equal to 100.');
        return;
    }
    gridTemplate = "repeat(" + squaresPerSide + ", auto)";
    container.style.gridTemplateColumns = gridTemplate;
    container.style.gridTemplateRows = gridTemplate;

    createSquares(squaresPerSide, type);
}

function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

createSquares(16, 'basic');

const basicButton = document.getElementById("basic-button");
basicButton.addEventListener('click', function () { reset('basic') });

const colorfulButton = document.getElementById("colorful-button");
colorfulButton.addEventListener('click', function () { reset('colorful') });

//const grayscaleButton = document.getElementById("grayscale-button");
//grayscaleButton.addEventListener('click', function () { reset('grayscale') });

//TODO: increment grayscale option