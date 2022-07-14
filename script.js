let gridSize = 256;

const gridContainer = document.querySelector('#gridContainer');

/* buttons to choose size of grid*/
const sizeButtons = document.querySelector('#sizeButtons');

const smallButton = document.createElement('button');
const medButton = document.createElement('button');
const largeButton = document.createElement('button');

smallButton.classList.add('smallButton');
medButton.classList.add('smallButton');
largeButton.classList.add('largeButton');

smallButton.textContent = '16x16';
medButton.textContent = '32x32';
largeButton.textContent = '64x64';

sizeButtons.appendChild(smallButton);
sizeButtons.appendChild(medButton);
sizeButtons.appendChild(largeButton);

smallButton.addEventListener("click", function() {
    unMakeGrid();
    gridSize = 256;
    makeGrid();
    changeGridSize(16);

});
medButton.addEventListener("click", function() {
    unMakeGrid();
    gridSize = 1024;
    makeGrid();
    changeGridSize(32);
});
largeButton.addEventListener("click", function() {
    unMakeGrid();
    gridSize = 4096;
    makeGrid();
    changeGridSize(64);
});

const drawButtons = document.querySelector('#drawButtons');
const rainbowButton = document.createElement('button');
const shaderButton = document.createElement('button');
const whiteButton = document.createElement('button');

whiteButton.textContent = 'White';
rainbowButton.textContent = 'Rainbow';
shaderButton.textContent = 'Shader';

drawButtons.append(rainbowButton, shaderButton, whiteButton);


whiteButton.addEventListener('click', function() {
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
        box.style.backgroundColor ='black';
        gridContainer.appendChild(box);
        box.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = 'white';
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

