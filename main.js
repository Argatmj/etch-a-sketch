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
        cell.style.backgroundColor = "white";
        cell.style.boxSizing = "border-box";
        
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        container.appendChild(cell);
    }
}



createGrid(10);