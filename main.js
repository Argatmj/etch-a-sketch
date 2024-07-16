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
        cell.className = "cells";
        cell.style.backgroundColor = "white";
        cell.style.boxSizing = "border-box";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = selectedColor;
        });

        container.appendChild(cell);
    }
}

let colourBtn = document.querySelector(".select");
let clearBtn = document.querySelector("#clear");
let eraseBtn = document.querySelector("#erase");
let selectedColor = '';

eraseBtn.addEventListener("click", () => selectedColor = "white");

colourBtn.addEventListener("change", () => selectedColor = colourBtn.value);

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cells");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});

createGrid(30);
