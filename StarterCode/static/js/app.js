// from data.js
var tableData = data;

// Step 1: verify the data by printing the data on the console 
console.log("Here is the data inputed:", tableData);

//Step 2: Using D3 select the tag "body" from html doc

const tbody = d3.select("tbody");

// Step 3: Create a function that will build the table  
function buildTable(data) {
    // Step 3.1: Replaces the HTML with a space. 
    tbody.html("");
    // Step 3.2: Create a checkpoint on the console
    console.log("Your table was cleared");
    // Step 3.3: Create foreach loop using arrow to paste values inside of the table 
    data.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Step 3.4: Console log message stating table has been built check for errors inside console log.
    console.log("Your table has been built. Double-check the console to inspect for errors highlighted in red");
}


// Step 5: Create second function to filtedr the data by the date and display
//the filtered data on the table.

function handleClick(data) {
    // Step 5.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 5.1 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");

    // Consol log the input value to double check.
    console.log(inputValue);

    // Create filter data according to user input value
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    // Console log the input value to double check.
    console.log(filteredData);

    // if (inputValue == filteredData) {
    //     buildTable(data);
    // } else {
    //     buildTable(filteredData);

    // }
    // // if (inputValue == null) {
    // //          buildTable(data);
    // //     alert("You did not provide a date");
    // //     return false;
    // // };

    buildTable(filteredData);

    // Step 5.2 : Creat conditional so if user leaves space blank (null value) the the buildTable
    //function is called with original data. When the user puts a date into the search field
    // then the function buildTable is called but with filtered data.
    // if (dateTimeValue === null) {
    //     buildTable(data);

    // } else if (dateTimeValue < "01/01/2010" || dateTimeValue > "01/13/2010") {
    //     alert("Please enter a date bewteen 01/01/2010 and 01/13/2010");
    //     buildTable(data);

    // } else {
    //     buildTable(filteredData);



    //     // grab all the table data and set to filteredData
    //     let filteredData = data.filter(handleClick);

    //     // Check to see if a date was entered and filter the
    //     // data using that date.






    //     // Rebuild the table using the filtered data
    //     // @NOTE: If no date was entered, then filteredData will
    //     // just be the original tableData.
    //     // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
    //     buildTable(filteredData);
};
// };
// Last step. Create a listner for the button.
d3.select("#filter-btn").on("click", handleClick);

// 1. function to filter data Inside of function affter filter add to filter function
// Have a trigger for function to run  ON.CLICK (Will trigger the function to run)
// 2. To do the filter look at activities day 2 -3.

//Last step: Make the function buildTable run again with original data.
buildTable(data);