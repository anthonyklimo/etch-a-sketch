
const buttons = document.querySelector('#buttons');

const colorPickerButton = document.createElement('button');
const blackButton = document.createElement('button');
const rainbowButton = document.createElement('button');
const eraserButton = document.createElement('button');
const clearButton = document.createElement('button');

colorPickerButton.textContent = 'Custom';
blackButton.textContent = 'Black';
rainbowButton.textContent = 'Rainbow';
eraserButton.textContent = 'Eraser';
clearButton.textContent = 'Clear';
clearButton.classList.add('clearButton');

var colorPicker = document.querySelector('#colorPicker');
var currentColor;

buttons.append(colorPickerButton, colorPicker, blackButton, rainbowButton, eraserButton, clearButton);

colorPicker.addEventListener('change', function(e) {
    currentColor = e.target.value;
})

colorPickerButton.addEventListener('click', function() {
    gridContainer.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = currentColor;
    })
});

rainbowButton.addEventListener('click', function() {
    gridContainer.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = rainbowInk();
    })
});

blackButton.addEventListener('click', function() {
    addColor('black');
});
eraserButton.addEventListener('click', function() {
    addColor('#FEF6EB');
});

clearButton.addEventListener('click', function() {
    unMakeGrid();
    makeGrid();
});

function addColor(color) {
        gridContainer.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = color;
        })
}


function rainbowInk() {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randInt = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randInt];
}

// add slider to determine grid size


let gridSize = 256;

var slider = document.getElementById('myRange');
var output = document.querySelector('.size');
output.innerHTML = `Size: ${slider.value} x ${slider.value}`;


slider.oninput = function() {
    output.innerHTML = `Size: ${this.value} x ${this.value}`;
    unMakeGrid();
    gridSize = (this.value ** 2);
    makeGrid();
    changeGridSize(this.value);
}

// make grid of n boxes 

const gridContainer = document.querySelector('#gridContainer');

function makeGrid() {
    
    for (let i = 0; i < gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor ='#FEF6EB';
        gridContainer.appendChild(box);
        // box.addEventListener('mouseover', function(e) {
        //     e.target.style.backgroundColor = 'black';
        // });
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

