let gridSize = 256;

const gridContainer = document.querySelector('#gridContainer');

var slider = document.getElementById("myRange");
var output = document.querySelector(".size");
output.innerHTML = `Size: ${slider.value} x ${slider.value}`;

slider.oninput = function() {
    output.innerHTML = `Size: ${this.value} x ${this.value}`;
    unMakeGrid();
    gridSize = (this.value ** 2);
    makeGrid();
    changeGridSize(this.value);
}

const drawButtons = document.querySelector('#drawButtons');
const blackButton = document.createElement('button');
const rainbowButton = document.createElement('button');
const shaderButton = document.createElement('button');
const eraserButton = document.createElement('button');

blackButton.textContent = 'Black';
rainbowButton.textContent = 'Rainbow';
shaderButton.textContent = 'Shader';
eraserButton.textContent = 'Eraser';

drawButtons.append(blackButton, rainbowButton, shaderButton, eraserButton);


blackButton.addEventListener('click', function() {
    gridContainer.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = 'black';
        e.target.style
    })
});

eraserButton.addEventListener('click', function() {
    gridContainer.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = 'white';
    })
});

rainbowButton.addEventListener('click', function() {
    gridContainer.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = rainbowInk();
    })
});

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
function rainbowInk() {
    let randInt = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randInt];
}




/*make grid of n boxes */

function makeGrid() {
    
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor ='white';
        gridContainer.appendChild(box);
        box.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = 'black';
        });
        }
}
// removes current grid
function unMakeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
}

// changes grid size to grid of n boxes
function changeGridSize(n) {
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
}

makeGrid();

