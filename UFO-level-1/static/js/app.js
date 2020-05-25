// from data.js
var tableData = data;

// YOUR CODE HERE!
tbody = d3.select("tbody");

//Console.log the data from data.js
//console.log(tableData );

// Step 1: Loop Through `data` and console.log each report object
//tableData.forEach(function(ufoSightings) {
//    console.log(ufoSightings);
//});

// Step 2-5:  Use d3 to append one table row `tr` for each weather report object
//  Don't worry about adding cells or text yet, just try appending the `tr` elements.
function displayData(tableData){
    tbody.text("")
    tableData.forEach(function(ufoSightings) {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value)
        })
    })
};


displayData(tableData)

// Select the button
var button = d3.select("#filter-btn")
var dateInput = d3.select("#datetime")

// Create event handlers 
button.on("click", runEnter);
dateInput.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
   

    // Get the value property of the input element
    var inputValue = dateInput.property("value");


    var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime===inputValue);
    
    displayData(filteredData);

}

















