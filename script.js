let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
    numRows=grid.rows.length;
    
    if(numRows == 0) {     //if table is empty, add first cell
        let row = grid.insertRow();
        let cell = row.insertCell();
        cell.onclick = function() {
            this.style.backgroundColor = `${colorSelected}`;
        };
    }
    else {
        numCols=grid.rows[0].children.length;
        let row = grid.insertRow();
        for(let i = 0; i < numCols; i++) {
            let cell = row.insertCell(i);
            cell.onclick = function() {
                this.style.backgroundColor = `${colorSelected}`;
            };
        }
    }
}

// Add a column
function addC() {
    numRows=grid.rows.length;
    
    if(numRows == 0) {     //if table is empty, add first cell
        let row = grid.insertRow();
        let cell = row.insertCell();
        cell.onclick = function() {
            this.style.backgroundColor = `${colorSelected}`;
        };
    }

    else {
        let rows = grid.rows;
        for(let i = 0; i < rows.length; i++) {
           let cell = rows[i].insertCell();
           cell.onclick = function() {
              this.style.backgroundColor = `${colorSelected}`;
           };
        }
    }
}

// Remove a row
function removeR() {
    numRows=grid.rows.length;
    if(numRows != 0) {
        grid.deleteRow(numRows-1);
    }
}

// Remove a column
function removeC() {
    numRows=grid.rows.length;
    if(numRows != 0) {
        let rows = grid.rows;
        for(let i = 0; i < rows.length; i++) {
            let lastCell = rows[i].children.length-1;
            rows[i].deleteCell(lastCell);
        }
        numCols = rows[0].children.length;
        if(numCols == 0) { //deleted all columns --> empty table
            numRows=grid.rows.length;
            for(let i = numRows-1; i >=0; i--) {
                grid.deleteRow(i);
            }
        }
    }
}

// Sets global variable for selected color
function selected(){
    colorSelected = document.getElementById("selectedColorId").value;
    //console.log(colorSelected);
}

// Fill all cells
function fill(){
    let cells = document.querySelectorAll('td');
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = `${colorSelected}`;
    };
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll('td');
    for(let i = 0; i < cells.length; i++) {
        cells[i].style.removeProperty('background-color');
    };
    
}

// Fill all uncolored cells
function fillU(){
    let cells = document.querySelectorAll('td');
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].style.backgroundColor == "") {
            cells[i].style.backgroundColor = `${colorSelected}`;
        };
        
    };
}