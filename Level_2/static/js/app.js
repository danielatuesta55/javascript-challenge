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
    // to the html file is #datetime, #cityname #statename #shapename. Console log values
    let dateElement = d3.select("#datetime");
    let inputDateValue = dateElement.property("value");


    let cityElement = d3.select("#cityname");
    let inputCityValue = cityElement.property("value");


    let stateElement = d3.select("#statename");
    let inputStateValue = stateElement.property("value");


    let shapeElement = d3.select("#shapename");
    let inputShapeValue = shapeElement.property("value");


    // Step 4.3: Console log the input value to double check.
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputShapeValue);

    // Step 5 Create an empty array as filtered data

    let filteredData = [];

    //Step 6: usin map function create new arrays to check if input values are within those parameters

    let dates = tableData.map(tableData => tableData.datetime);
    let cities = tableData.map(tableData => tableData.cityname);
    let states = tableData.map(tableData => tableData.statename);
    let shapes = tableData.map(tableData => tableData.shapename);

    //Step 7: Create a conditional statment and nested conditional statements using if
    // to filter the data allowing the user to interact with page (table)

    if (dates.includes(inputDateValue)) {
        if (cities.includes(inputCityValue)) {
            if (states.includes(inputStateValue)) {
                if (countries.includes(inputCountryValue)) {
                    if (shapes.includes(inputShapeValue)) {
                        //Step 7.1: cleare data 
                        tbody.html("");
                        //Step 7.2 Created filter data to display to users
                        filteredData = tableData.filter(f => f.datetime === inputDateValue && f.city === inputCityValue && f.state === inputStateValue && f.country === inputCountryValue && f.shape === inputShapeValue);
                        //Step 7.3 console log filtered data
                        console.log(filteredData);
                        // Step 7.4 Create else if statement for shape if it dosent have a user input
                    } else if (inputShapeValue === "") {
                        // Step 7.5 : cleare data 
                        tbody.html("");
                        // Step 7.6: create new filter data array to feed builTable function 
                        filteredData = tableData.filter(f => f.datetime === inputDateValue && f.city === inputCityValue && f.state === inputStateValue && f.country === inputCountryValue);
                        // Step 7.7: console log the new filtered data
                        console.log(filteredData);
                    } else if (!shape.includes(inputShapeValue)) {
                        //Step 7.8: cleare data 
                        tbody.html("");
                        // Step 7.9: create new window alert to tell the user shape dosent exist
                        alert("That is not a valid shape. Please try again");
                        // Step 7.10: Console log error message
                        console.log("The shape selected by user dosent exist");
                    }
                    // Step 7.11 next conditiopnal for countries input by user
                } else if (inputCountryValue === "") {
                    if (shapes.includes(inputShapeValue)) {
                        //Step 7.12 : cleare data 
                        tbody.html("");
                        // Step 7.13: create a new filtered data array
                        filteredData = tableData.filter(f => f.datetime === inputDateValue && f.city === inputCityValue && f.state === inputStateValue && f.shape === inputShapeValue);
                        // Step 7.14: console log the new filtered data
                        console.log(filteredData);
                    } else if (inputShapeValue === "") {
                        //Step 7.15 : cleare data 
                        tbody.html("");
                        // Step 7.16: create a new filtered data array
                        filteredData = tableData.filter(f => f.datetime === inputDateValue && f.city === inputCityValue && f.state === inputStateValue);
                        // Step 7.17: console log the new filtered data
                        console.log(filteredData);
                    } else if (!shapes.includes(inputShapeValue)) {
                        //Step 7.18: cleare data 
                        tbody.html("");
                        // Step 7.19: create new window alert to tell the user shape dosent exist
                        alert("That is not a valid shape. Please try again");
                        // Step 7.20: Console log error message
                        console.log("The shape selected by user dosent exist");
                    }
                } else if (!countries.includes(inputCountryValue)) {
                    //Step 7.21: cleare data 
                    tbody.html("");
                    // Step 7.22: create new window alert to tell the user shape dosent exist
                    alert("That is not a country. Please try again");
                    // Step 7.23: Console log error message
                    console.log("The country selected by user dosent exist");
                } else if (inputStateValue === "") {
                    if (countries.includes(inputCountryValue)) {
                        if (shapes.includes(inputShapeValue)) {
                            //Step 7.24 : cleare data 
                            tbody.html("");
                            // Step 7.25: create a new filtered data array
                            filteredData = tableData.filter(f => f.datetime === inputDateValue && f.city === inputCityValue && f.country === inputCountryValue && f.shape === inputShapeValue);
                            // Step 7.26: console log the new filtered data
                            console.log(filteredData);
                        }


                    }
                }
            }
        }
    };


    // Step 5: Create a listner for the button.
    d3.select("#filter-btn").on("click", handleClick);


    // Step 6: Make the function buildTable run again with original data.
    buildTable(tableData);