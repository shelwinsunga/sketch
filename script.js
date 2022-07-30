//Sets important constants and variables

const container = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



//Creates a default grid sized 16x16 
function defaultGrid(size) {
    makeRows(size);
    makeColumns(size);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

defaultGrid(32);

const allCells = document.querySelectorAll(".cell");
function draw(){
    allCells.forEach((cell) =>{
        cell.addEventListener('mouseover', ()=>{
            cell.style.backgroundColor="red";
        })
        cell.addEventListener('mousedown' , () =>{
            cell.style.backgroundColor="red";
        });
    });

}

draw();


function clearGrid(){
    const clearbtn = document.getElementById('clear');
    clearbtn.addEventListener('click', () => { 
        allCells.forEach((cell) =>{
            cell.style.backgroundColor="transparent";

        });


    });

}

clearGrid();

document.allCells.style.backgroundColor="red";