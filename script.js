const grid = document.querySelector('#grid');
const container = document.querySelector('#container');
const gridItem = document.querySelector('.grid-item')


function createGridItem(){
    const newItem = document.createElement('div');
    newItem.classList.add('grid-item-new');
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
//desired number -2, rows of 8


function getMouse(){
    const newGridItem = document.querySelectorAll('grid-item-new')
           console.log(newGridItem)
    }
function clearSquare(){
        const resetButton = document.querySelector('.reset-button')
        resetButton.addEventListener('click', function(){
        gridItem.style.backgroundColor = 'white'
    })
}




clearSquare()


getMouse()
generateGrid(62);