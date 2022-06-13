Object.defineProperty(exports,"__esModule",{ value: true });

const google = window.google;
google.charts.load('current');
google.charts.setOnLoadCallback(init);


function init() {
  var url = 'https://docs.google.com/spreadsheets/d/1KRMiKbX0R_7QtLfwIZStgFW3ig0Eyt1C/edit#gid=337720664';
  var query = new google.visualization.Query(url);
  query.setQuery('select B, C, D, E, F');
  query.send(processSheetsData);
}

function processSheetsData(response) {
    let array = [];
    var data = response.getDataTable();
    var columns = data.getNumberOfColumns();
    var rows = data.getNumberOfRows() - 1;

    for (var r = 5; r < rows; r++) {
      var row = [];
      for (var c = 0; c < columns; c++) {
        row.push(data.getFormattedValue(r, c));
      }
      array.push({
        year: row[0],
        visitors: row[1],
        staff_affiliation: row[2],
        grad_alumni: row[3],
        undergrad: row[4],

      });
    }
    console.log(array);
    exports.arr = array;
  }




