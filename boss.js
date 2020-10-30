// constant variables
const container = document.querySelector("#container");

const colorButton = document.querySelector("#color");
const resetButton = document.querySelector("#reset");
const sizeButton = document.querySelector("#size");

// functions to color divs
// normal color
const regColor = function(){
    this.style.backgroundColor = "red";
    // console.log(this);
}

// random color
const rndColor = function(){
    this.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';  
    // console.log(this);
}

// set currentColor to regColor
let currentColor = regColor;

// Create a grid with x-rows, x-cols size
function makeGrid(rows, cols){

    currentColor = regColor;
    for (c = 0; c < (rows * cols); c++){
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        const div = document.createElement("div");
        container.appendChild(div);

        // EventListener for bg-color red
        div.addEventListener("mouseover", currentColor);
    }
}

// reset the grid to original status
function resetGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
};

// Eventlistener to reset the grid
resetButton.addEventListener("click", () => {
    resetGrid();
    makeGrid(16, 16);
});

// Eventlistener to pick random color
colorButton.addEventListener("click", () => {
    const divs = container.querySelectorAll("div");
    for (const div of divs){
        div.removeEventListener("mouseover", currentColor);
        div.addEventListener("mouseover", rndColor);
    }
});

// EventListener to change grid size
sizeButton.addEventListener("click", () => {
    const gridSize = prompt("What grid size do you want?");

    if (gridSize > 100 || gridSize <= 15){
        alert("Min. size: 16x16 // Max. size: 100x100");
    } else if (isNaN(gridSize) == true){
        alert("Input has to be a number!");
    } else {
        resetGrid();
        makeGrid(gridSize, gridSize);
    }
})

makeGrid(16, 16);