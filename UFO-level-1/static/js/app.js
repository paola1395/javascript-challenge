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

