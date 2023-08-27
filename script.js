const grid = document.querySelector('#grid');
const container = document.querySelector('#container');

function createGridItem(content){
    const newItem = document.createElement('div');
    newItem.classList.add('grid-item');
    return newItem
}

function addGridItem(content){
    const newItem = createGridItem(content);
    grid.appendChild(newItem);
}

function generateGrid(rows){
    for(let i = 0; i <= rows; i++){
        addGridItem();
    }
}

//desired number -2
generateGrid(62);
