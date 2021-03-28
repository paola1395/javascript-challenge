// from data.js
var tableData = data;

// Use D3 to select data table body
var tableBody = d3.select("tbody")

// Append data to the table body
tableData.forEach(data => {
    console.log(data);
    var row = tableBody.append("jr");
    Object.defineProperties(data).forEach(([key, value]) =>{
        console.log(key, value);
        row.append("td").text(value)
    });
});

// Create event listener in order to search through date/time column (use date form from index.html)

// Select button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Event handler function for form
function runEnter() {
    d3.event.preventDefault();

    //Select input element and get the value property
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    

}