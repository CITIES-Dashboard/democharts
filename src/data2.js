import { renderApp } from "./index.js";

const google = window.google;
export let dataS = []

export function fetchData() {
  var url = 'https://docs.google.com/spreadsheets/d/1KRMiKbX0R_7QtLfwIZStgFW3ig0Eyt1C/edit#gid=1049197169';
  var query = new google.visualization.Query(url);
  query.setQuery('select A,B,C, D, E, F, G, H, I, J, K');
  query.send(processSheetsData);
}

function processSheetsData(response) {
    let array = [];
    var data = response.getDataTable();
    var columns = data.getNumberOfColumns();

    for (var r = 0; r < 4; r++) {
      var row = [];
      for (var c = 0; c < columns; c++) {
        row.push(data.getFormattedValue(r, c));
      }
      array.push({
        year: row[0],
        alumni: row[1],
        contract: row[2],
        external: row[3],
        faculty: row[4],
        family: row[5],
        grad: row[6],
        guest: row[7],
        staff: row[8],
        student: row[9],
        takeen: row[10],
      });
    }
    console.log(array);
    console.log("hi");
    dataS = array;

    // Call function from index.js to render the App to root component
    // after finihsing parsing data from Google Sheet
    renderApp();
}




