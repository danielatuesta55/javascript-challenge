// from data.js
let tableData = data;

// Step 1: verify the data by printing the data on the console 
console.log("Here is the data inputed:", tableData);

//Step 2: Using D3 select the tag "body" from html doc

let tbody = d3.select("tbody");

// Step 3: Create a function that will build the table  
function buildTable(tableData) {
    // Step 3.1: Replaces the HTML with a space. 
    tbody.html("");
    // Step 3.2: Create a checkpoint on the console
    console.log("Your table was cleared");
    // Step 3.3: Create foreach loop using arrow to paste values inside of the table 
    tableData.forEach((element) => {
        let row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
    // Step 3.4: Console log message stating table has been built check for errors inside console log.
    console.log("Your table has been built. Double-check the console to inspect for errors highlighted in red");
}

// Step 4: Create second function to filtedr the data by the date and display
//the filtered data on the table.

function handleClick(data) {
    // Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 4.2 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");


    // Step 4.3: Console log the input value to double check.
    console.log(inputValue);

    // Step 4.4: Create filter data according to user input value
    let filteredData = tableData.filter(data => data.datetime === inputValue);
    // Step 4.5 Create a new varible with the array of datas to use in the if statement
    let dates = tableData.map(tableData => tableData.datetime);
    console.log(dates);
    // Step 4.6: Creat conditional statement usin If
    if (dates.includes(inputValue)) {
        console.log("The input value = table value");
        tbody.html("");
    } else if (inputValue === "") {
        tbody.html("");
        filteredData = tableData;
        console.log(tableData);

    } else if (!dates.includes(inputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The date you chose isnt valid. Please try again and pick a date bewteen 1/1/2010 and 1/13/2010");
        filteredData = tableData;
        buildTable(tableData);
    }
    buildTable(filteredData);
};


// Step 5: Create a listner for the button.
d3.select("#filter-btn").on("click", handleClick);


// Step 6: Make the function buildTable run again with original data.
buildTable(tableData);