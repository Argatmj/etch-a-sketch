function createGrid(num) {
    let container = document.querySelector(".container");
    let containerWidth = 400; 
    let containerHeight = 400; 

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;

    let cellSize = containerWidth / num;

    for (let i = 0; i < num * num; i++) {
        let cell = document.createElement("div");
        cell.style.margin = 0;
        cell.style.opacity = 1;
        cell.className = "cells";
        cell.style.backgroundColor = "white";
        cell.style.boxSizing = "border-box";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseover", () => {
            if(!darkens){
                cell.style.opacity = 1;
                cell.style.backgroundColor = random ? `#${getRandomColor()}` : selectedColor;
            }
            else{
                let currentOpac = cell.style.opacity;
                cell.style.opacity = currentOpac - 0.1;
            }
        });

        container.appendChild(cell);
    }
}

function getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
}

let colourBtn = document.querySelector(".select");
let sizeBtn = document.querySelector(".size");
let clearBtn = document.querySelector("#clear");
let rbBtn = document.querySelector("#rainbow");
let eraseBtn = document.querySelector("#erase");
let opacBtn = document.querySelector("#opac");
let selectedColor = '';
let random = false;
let darkens = false;

sizeBtn.addEventListener("mousemove",() => {
    let nums = document.querySelectorAll(".num");
    nums.forEach(num => num.innerHTML = sizeBtn.value);
});

sizeBtn.addEventListener("change", () => {
    let container = document.querySelector(".container");
    let allCells = document.querySelectorAll(".cells");
   allCells.forEach(cell => container.removeChild(cell));

    createGrid(sizeBtn.value);
});

rbBtn.addEventListener("click",() => {
    darkens = false;
    random = true;
});

opacBtn.addEventListener("click", () => {
    random = false;    
    darkens = true;
});

eraseBtn.addEventListener("click", () => {
    random = false;
    darkens = false;
    selectedColor = "white"
});

colourBtn.addEventListener("change", () => {
    random = false; 
    darkens = false;
    selectedColor = colourBtn.value
});

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
        cell.style.opacity = 1;
    });
});

window.onload = () => {
    createGrid(10);
}
