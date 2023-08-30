const grid = document.querySelector('#grid');
const container = document.querySelector('#container');
const gridItem = document.querySelector('.grid-item');
const newLine = document.querySelector('.new-line');
let clicked = false;

function createGridItem(){
    const newItem = document.createElement('div');
     newItem.classList.add('grid-item'); 
    return newItem
}
function addGridItem(){
    const newItem = createGridItem();
    grid.appendChild(newItem);
}
function selectNewGridItem(){
    let newGridItem = document.querySelectorAll('.grid-item')
    newGridItem.forEach(gridItem => {
        gridItem.style.backgroundColor='white';
    })
}
function initialGeneration(){
    for(let i = 0; i <= 62; i++){
        addGridItem();
    } selectNewGridItem();
}
//use string ""
function changeGrid(columns){
    grid.style.gridTemplateColumns=columns;
}
function clearBoard(){
    const board = document.querySelectorAll('.grid-item');
    const test = document.querySelector('.clear-button');
    test.addEventListener('click', function(){ 
        board.forEach(function(board){
            board.remove();
        })
    })
}
function eightBy(){
    const button = document.querySelector('.eight-by')
    button.addEventListener('click', function(){
        
        for(let i = 0; i <= 63; i++){
            addGridItem();
        } selectNewGridItem();
          clearBoard();
          colorGrid();
    })
}
function generateGrid(){
    newLine.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 7; i++){
                addGridItem();     
        }
         }
         selectNewGridItem(); 
         colorGrid();
         clearBoard(); 
    })
}
function colorGrid(){
    let newGridItem = document.querySelectorAll('.grid-item'); 
    const resetButton = document.querySelector('.reset-button')
    
    newGridItem.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function() {
            gridItem.style.backgroundColor='blue';
        })
        resetButton.addEventListener('click', function(){  
            gridItem.style.backgroundColor = 'white'
            clicked = false;
        })
    })
}


initialGeneration();
generateGrid();
clearBoard();
eightBy();
colorGrid();