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
};


function handleClick(evt) {

    d3.event.preventDefault();

    let filteredData = tableData;

    filteredData = filterByDate(filteredData);
    filteredData = filterByCity(filteredData);
    filteredData = filterByState(filteredData);
    filteredData = filterByCountry(filteredData);
    filteredData = filterByShape(filteredData);

    // filteredData ya tiene todos los filtros
    buildTable(filteredData);
}


function filterByDate(filteredData) {
    // Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 4.2 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");


    // Step 4.3: Console log the input value to double check.
    console.log(inputValue);

    // Step 4.5 Create a new varible with the array of datas to use in the if statement
    let dates = tableData.map(tableData => tableData.datetime);
    console.log(dates);
    // Step 4.6: Creat conditional statement usin If
    if (dates.includes(inputValue)) {
        console.log("The input value = table value");
        tbody.html("");
        return filteredData.filter(data => data.datetime === inputValue);

    } else if (inputValue === "") {
        tbody.html("");


    } else if (!dates.includes(inputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The date you chose isnt valid. Please try again and pick a date bewteen 1/1/2010 and 1/13/2010");

    }
    // buildTable(filteredData);
    return filteredData;
};

function filterByCity(filteredData) {
    // Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    let cityElement = d3.select("#city");
    let cityInputValue = cityElement.property("value");
    // Step 4.3: Console log the input value to double check.
    console.log(cityInputValue);

    let cities = filteredData.map(tableData => tableData.city);
    console.log(cities);

    // Step 4.6: Creat conditional statement usin If
    if (cities.includes(cityInputValue)) {
        console.log("The input value = table value");
        tbody.html("");
        return filteredData.filter(data => data.city === cityInputValue);
    } else if (cityInputValue === "") {
        tbody.html("");


    } else if (!cities.includes(cityInputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The city you chose isnt valid. Please try again");

    }
    return filteredData;
};

function filterByState(filteredData) {
    //Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 4.2 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let stateElement = d3.select("#state");
    let stateInputValue = stateElement.property("value");


    // Step 4.3: Console log the input value to double check.
    console.log(stateInputValue);

    // Step 4.5 Create a new varible with the array of datas to use in the if statement
    let states = tableData.map(tableData => tableData.state);
    console.log(states);
    // Step 4.6: Creat conditional statement usin If
    if (states.includes(stateInputValue)) {
        console.log("The input value = table value");
        tbody.html("");
        return filteredData.filter(data => data.state === stateInputValue);
    } else if (stateInputValue === "") {
        tbody.html("");


    } else if (!states.includes(stateInputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The state you chose isnt valid. Please try again");

    }
    return filteredData;
};

function filterByCountry(filteredData) {
    //Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 4.2 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let countryElement = d3.select("#country");
    let countryInputValue = countryElement.property("value");
    // Step 4.3: Console log the input value to double check.
    console.log(countryInputValue);
    // Step 4.5 Create a new varible with the array of datas to use in the if statement
    let countries = tableData.map(tableData => tableData.country);
    console.log(countries);
    // Step 4.6: Creat conditional statement usin If
    if (countries.includes(countryInputValue)) {
        console.log("The input value = table value");
        tbody.html("");
        return filteredData.filter(data => data.country === countryInputValue);
    } else if (countryInputValue === "") {
        tbody.html("");


    } else if (!countries.includes(countryInputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The country you chose isnt valid. Please try again");

    }
    return filteredData;

};

function filterByShape(filteredData) {
    //Step 4.1: Prevent the page from refreshing
    d3.event.preventDefault();

    // Step 4.2 : Grab the value from the date time search option. The id acording
    // to the html file is #datetime.
    let shapeElement = d3.select("#shape");
    let shapeInputValue = shapeElement.property("value");


    // Step 4.3: Console log the input value to double check.
    console.log(shapeInputValue);

    // Step 4.5 Create a new varible with the array of datas to use in the if statement
    let shapes = tableData.map(tableData => tableData.shape);
    console.log(shapes);
    // Step 4.6: Creat conditional statement usin If
    if (shapes.includes(shapeInputValue)) {
        console.log("The input value = table value");
        tbody.html("");
        return filteredData.filter(data => data.shape === shapeInputValue);
    } else if (shapeInputValue === "") {
        tbody.html("");


    } else if (!shapes.includes(shapeInputValue)) {
        tbody.html("");
        console.log(" Data Dosent exits error");
        alert("The shape you chose isnt valid. Please try again");

    }
    return filteredData;

};

// Step 5: Create a listner for the button.
d3.select("#filter-btn").on("click", handleClick);

buildTable(tableData);