const grid = document.querySelector('#grid');
const container = document.querySelector('#container');
const gridItem = document.querySelector('.grid-item');
const newLine = document.querySelector('.new-line8');
const newLine1 = document.querySelector('.new-line12');
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
function newLine8x(){
    newLine.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 7; i++){
                addGridItem();     
        }
         }
         selectNewGridItem(); 
         colorGrid(); 
    })
}
function newLine12x(){
    newLine1.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 11; i++){
                addGridItem();     
        }
         }
         selectNewGridItem(); 
         colorGrid(); 
    })
}
function initialGeneration(){
    for(let i = 0; i <= 63; i++){
        addGridItem();
    } selectNewGridItem();
}
function selectNewGridItem(){
    let newGridItem = document.querySelectorAll('.grid-item')
    newGridItem.forEach(gridItem => {
        gridItem.style.backgroundColor='white';
    })
}
//use string ""
function changeGrid(columns){
    grid.style.gridTemplateColumns=columns;
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
function clearBoard() {
    const gridContainer = document.getElementById('grid');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function eightBy(){
    clearBoard();

    const button = document.querySelector('.eight-by')
    button.addEventListener('click', function(){
        clearBoard();
        changeGrid('50px 50px 50px 50px 50px 50px 50px 50px')

        for(let i = 0; i <= 63; i++){
            addGridItem();
        }
        selectNewGridItem()
        colorGrid()
    }
)}        


function twelveBy() {
    clearBoard();

    const button = document.querySelector('.twelve-by');
    button.addEventListener('click', function() {
        clearBoard(); 
        changeGrid('50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px');
        
        for (let i = 0; i <= 143; i++) {
            addGridItem();
        }       
        selectNewGridItem();
        colorGrid();
    });
}

eightBy();
twelveBy();
newLine8x();
newLine12x();
initialGeneration();
colorGrid();