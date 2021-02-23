console.log('Hello World!');

function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 100; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 100; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        // var cellText = document.createTextNode("row "+i+", column "+j);
        // var cellText = document.createTextNode(0);
        // cell.appendChild(cellText);
        row.appendChild(cell);
        if ((i % 2 == 0 && j % 2 ==0) || (i % 2 != 0 && j % 2 != 0)) {
            cell.style.backgroundColor = 'black';
        }
        
        // console.log(i,j)
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
  }