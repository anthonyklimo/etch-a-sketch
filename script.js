const gridContainer = document.querySelector('#gridContainer');

/* buttons to choose size of grid*/
const sizeButtons = document.querySelector('#sizeButtons');

const smallButton = document.createElement('button');
smallButton.classList.add('smallButton');
smallButton.textContent = '16x16';

const medButton = document.createElement('button');
medButton.classList.add('smallButton');
medButton.textContent = '32x32';

const largeButton = document.createElement('button');
largeButton.classList.add('largeButton');
largeButton.textContent = '48x48';



sizeButtons.appendChild(smallButton);
sizeButtons.appendChild(medButton);
sizeButtons.appendChild(largeButton);

smallButton.addEventListener("click", function() {
    unMakeGrid();
    makeGrid(256);
    changeGridSize(16);
});

medButton.addEventListener("click", function() {
    unMakeGrid();
    makeGrid(1024);
    changeGridSize(32);
});

largeButton.addEventListener("click", function() {
    unMakeGrid();
    makeGrid(2304);
    changeGridSize(48);
});


/*make grid of n boxes */
function makeGrid(n) {
    for (let i = 0; i < n; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor ='blue';

        gridContainer.appendChild(box);
        box.addEventListener("mouseover", function(e) {
            e.target.style.backgroundColor = 'white';
        });
        }
}

function unMakeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
}

function changeGridSize(n) {
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
}

makeGrid(256);

