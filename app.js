console.log(document.styleSheets);

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
            }
            )
        }

        if (type == 'grayscale') {
            if (newDiv.style.backgroundColor = "white") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.1)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                })
            } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)") {
                newDiv.addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
                })
            }
            /*

            newDiv.addEventListener("mouseover", function (event) {

                if (newDiv.style.backgroundColor = "white") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                }
                if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.1)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.6)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                } else if (newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.9)") {
                    event.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
                } else {
                    event.newDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
                }
            }
            )
            */
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

const grayscaleButton = document.getElementById("grayscale-button");
grayscaleButton.addEventListener('click', function () { reset('grayscale') });