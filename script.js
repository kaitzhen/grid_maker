let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
    numRows=grid.rows.length;
    
    if(numRows == 0) {     //if table is empty, add first cell
        let row = grid.insertRow();
        let cell = row.insertCell();
    }
    else {
        numCols=grid.rows[0].children.length;
        let row = grid.insertRow();
        for(let i = 0; i < numCols; i++) {
            row.insertCell(i);
        }
    }
}

// Add a column
function addC() {
    numRows=grid.rows.length;
    
    if(numRows == 0) {     //if table is empty, add first cell
        let row = grid.insertRow();
        let cell = row.insertCell();
    }

    else {
        let rows = grid.rows;
        for(let i = 0; i < rows.length; i++) {
         rows[i].insertCell();
        }
        //console.log('num of cols');
        //console.log(rows[0].children.length);
    }

    
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Sets global variable for selected color
function selected(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all cells
function fill(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}