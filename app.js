const div = document.createElement("div");
const erase = document.querySelector('.btn');
const rubber = document.querySelector('.rub');
const draw = document.querySelector('.draw');

//to make the grid 
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid";

        var gridCells = document.querySelectorAll('.grid');
        gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
    };
};

//to change the color 

function changeColor() {
    this.style.backgroundColor = 'black';
}

//to clear the board
function fresh() {
    var NewSize = prompt('Enter Number of Square');

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); // removes all grid squares
    }
    makeRows(NewSize, NewSize); // create new grid 
}

//eraser
function eraseColor() {
    var gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('mouseleave', changeColorwhite));
}

//for again drawing 
function startdraw() {
    var gridCells = document.querySelectorAll('.grid');
    gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor));
}
function changeColorwhite() {

    this.style.backgroundColor = 'white';
}

window.onload = makeRows(16, 16);
draw.addEventListener('click', startdraw);
erase.addEventListener('click', fresh);
rubber.addEventListener('click', eraseColor);




