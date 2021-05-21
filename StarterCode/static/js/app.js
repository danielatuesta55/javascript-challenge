// from data.js
var tableData = data;

// Step 1: verify the data by printing the data on the console 
console.log("Here is the data inputed:", tableData);

//Step 2: Using D3 select the tag "body" from html doc

var tbody = d3.select("tbody");

// Step 3: Create a function that will build the table  
function buildTable(data) {
    // Step 3.1: Create foreach loop using arrow to paste values inside of the table 
    data.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Step 3.2: Console log message stating table has been built check for errors inside console log.
    console.log("Your table has been built. Double-check the console to inspect for errors highlighted in red");
}
// Step 4: display the data calling the function
buildTable(data);