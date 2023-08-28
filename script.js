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
function generateGrid(){
    eightXButton.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 62; i++){
                addGridItem();
            }
            clicked = true;
        }
        colorGrid(); 
    })
    fourXButton.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 14; i++){
                addGridItem();
             }
             clicked = true;
            }
             colorGrid(); 
        })
    twoXButton.addEventListener('click', function(){
        if(!clicked){
            for(let i = 0; i <= 6; i++){a
                GridItem();
        }
            clicked = true;
        }
        colorGrid(); 
    })
}
function colorGrid(){
            let newGridItem = document.querySelectorAll('.grid-item'); 
            const resetButton = document.querySelector('.reset-button')
            
            newGridItem.forEach(gridItem => {
                gridItem.addEventListener('mouseover', function() {
                    gridItem.style.backgroundColor='red';
                    
                })
                resetButton.addEventListener('click', function(){  
                    gridItem.style.backgroundColor = 'white'
                    clicked = false;
                })
            })
}
generateGrid();

