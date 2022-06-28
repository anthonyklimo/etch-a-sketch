const gridContainer = document.querySelector('#gridContainer');

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



makeGrid(256);