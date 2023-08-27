const grid = document.querySelector('#grid');
const container = document.querySelector('#container');
const gridItem = document.querySelector('.grid-item')


function createGridItem(){
    const newItem = document.createElement('div');
    newItem.classList.add('grid-item');
    return newItem
}
function addGridItem(){
    const newItem = createGridItem();
    grid.appendChild(newItem);
}
function generateGrid(rows){
    for(let i = 0; i <= rows; i++){
        addGridItem();
    }
}
//desired number -2, rows of 8
generateGrid(62);
function colorGrid(){
            let newGridItem = document.querySelectorAll('.grid-item'); 
            const resetButton = document.querySelector('.reset-button')
            
            newGridItem.forEach(gridItem => {
                gridItem.addEventListener('mouseover', function() {
                    gridItem.style.backgroundColor='red';
                    console.log(newGridItem, this)
                })
                resetButton.addEventListener('click', function(){  
                    gridItem.style.backgroundColor = 'white'
                })
            })
        }
colorGrid();