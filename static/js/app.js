// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear any existing data
    tbody.html("");
    // loop through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // function to append a table row to the table body
        let row = tbody.append("tr");
        // loop through each field in the dataRow
        // add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

// start setting up filters
// date data
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if date filter is active and filter if so
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild table using filters if applicable
    // return original tableData if no filters
    buildTable(filteredData);
}

// attach an event to listen for the button click
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page first loads
buildTable(tableData);