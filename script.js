const grid = document.querySelector('#grid');
const container = document.querySelector('#container');
const gridItem = document.querySelector('.grid-item');
const eightXButton = document.querySelector('.grid-size-one');
const fourXButton = document.querySelector('.grid-size-two');
const twoXButton = document.querySelector('.grid-size-three');
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
    const button = document.querySelector('.test')
    button.addEventListener('click', function(){
        for(let i = 0; i <= 63; i++){
            addGridItem();
        } selectNewGridItem();
            clearBoard();
            colorGrid();
    })
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
function generateGrid(){
    /*eightXButton.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 63; i++){
                addGridItem();
            }
            clicked = true;
        }
        colorGrid(); 
    }) */
    twoXButton.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 7; i++){
                addGridItem();     
        } //clicked = true;
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