const grid = document.querySelector('#grid');
const container = document.querySelector('#container');

function createGridItem(content){
    const newItem = document.createElement('div');
    newItem.classList.add('grid-item');
    return newItem
}

function makeGrid(content){
    const newItem = createGridItem(content);
    grid.appendChild(newItem);
}

function moreGrid(rows){
    for(let i = 0; i <= rows; i++){
        
        makeGrid();
    }
}
moreGrid(24);
