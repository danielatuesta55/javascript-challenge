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



// function buildTable(data) {
//     data.forEach((element) => {
//         var row = tbody.append("tr");
//         Object.entries(element).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });

// };

// Step 3: Create a function that will build the table 

// function buildTable(tableData) {
//     // Step 3.1 : First clear table if something is wrong so it dosent show data  
//     tbody.html('');

//     //Step 3.2 Create a for each loop that create initial table column head

//     tableData.forEach(function(element) {
//         //Step 3.3 Create variable tr that appends tr into the <tbody> tag
//         var tr = tbody.append("tr");
//         //Step 3.4: Append td to table structure indepente for each column in the table
//         tr.append("td").attr("class", "ufosight").text(element.datetime);
//         tr.append("td").attr("class", "ufosight").text(element.city);
//         tr.append("td").attr("class", "ufosight").text(element.state);
//         tr.append("td").attr("class", "ufosight").text(element.country);
//         tr.append("td").attr("class", "ufosight").text(element.shape);
//         tr.append("td").attr("class", "ufosight").text(element.durationMinutes);
//         tr.append("td").attr("class", "ufosight").text(element.comments);
//     });
// };

// // Step 4: Console log this message to know that the code was run properly when building the table
// console.log("Your table has been built. Double-check the console to inspect for errors highlighted in red");