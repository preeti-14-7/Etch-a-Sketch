const div = document.createElement("div");
const erase = document.querySelector('.btn');

//to make the grid 
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //   cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};


//to fill the boxex with color 
function fillColor()
{
   div.style.backgroundColor = "black";

}



//call the function 
makeRows(16, 16);
div.addEventListener('click',fillColor);



