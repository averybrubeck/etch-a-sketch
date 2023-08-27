const gridItem = document.querySelector('.grid-item');
const newItem = document.createElement(gridItem)
const grid = document.querySelector('.grid');
const container = document.querySelector('.container');

function makeGrid(rows){
    for(let i = 0; i <= rows; i++){
        container.appendChild(newItem);
    }

}

makeGrid(8);