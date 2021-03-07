console.log('Hello World!');
const gridsize = 100;

var array1 = [];
var array2 = [];
var rowNum = 0;
var neighboursAlive = 0;
var neighboursDead = 0;
var isGridClear = true;

// console.log(array1);
// console.log(array2);

//0 = dead, 1 = alive
// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

function generate_table() {
  
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < gridsize; i++) {
      // creates a table row
      var row = document.createElement("tr");
      //gives each row an id
      //row.setAttribute('id','tr' + i);
  
      for (var j = 0; j < gridsize; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        //gives each cell an attribute
        //cell.setAttribute('id','td' + i + j);
        if (i < 10 && j < 10) {
          cell.setAttribute('id','td0' + i + '0' + j);
        } else if (i < 10 && j > 9) {
          cell.setAttribute('id','td0' + i + j);
        } else if (i > 9 && j < 10) {
          cell.setAttribute('id','td' + i + '0' + j);
        } else {
          cell.setAttribute('id','td' + i + j);
        }

        row.appendChild(cell);

        // adds an event listener to all cells so that if the cell is clicked it will change state
        cell.addEventListener('click', function (e) {

          if (e.target.style.backgroundColor === 'blue') {
            e.target.style.backgroundColor = 'white'
          } else {
            e.target.style.backgroundColor = 'blue'
          };

          // updates the grid so that once a cell is clicked it will display a different colour
          updateGrid();
        });
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);

    // initializes the grid to be completely dead.
    clearGrid();
  }

// called on btn press - sets all cells to be 0!
function clearGrid() {
  isGridClear = true;
  // creates a gridsize x gridsize array of random 1s or 0s
  for (let i = 0; i < gridsize; i++) {
    array1[i] = [];
    array2[i] = [];
    for (let j = 0; j < gridsize; j++) {
        array1[i].push(0);
        array2[i].push(0);
    };
  };

  displayOnGrid();
};

// called when a cell is clicked so that the array is updated.
function updateGrid() {
  isGridClear = false;
  for (let i = 0; i < gridsize; i++) {
    for (let j = 0; j < gridsize; j++) {
      var idName = ''
      if (i < 10 && j < 10) {
        idName = ('id','td0' + i + '0' + j);
      } else if (i < 10 && j > 9) {
        idName = ('id','td0' + i + j);
      } else if (i > 9 && j < 10) {
        idName = ('id','td' + i + '0' + j);
      } else {
        idName = ('id','td' + i + j);
      }

      
      var cell = document.getElementById(idName);

        if (cell.style.backgroundColor === 'blue') {
          array1[i][j] = 1;
        } else {
          array1[i][j] = 0;
        }
    };
  };

  if (isGridClear === true) {
    document.getElementById('outputMessage').innerHTML = 'Everythings Dead, nothing will happen, chill!';
  } else {
    document.getElementById('outputMessage').innerHTML = 'Still here??';
  };
};

// called on btn press!
function newRandomGrid() {
  isGridClear = false;
  rowNum = 0;
  neighboursAlive = 0;
  neighboursDead = 0;
  setRandomGrid();
  //outpudGrid();
  displayOnGrid();
};

// creates and randomizes the arrays! - used for first time / resets
function setRandomGrid() {
  // creates a gridsize x gridsize array of random 1s or 0s
  for (let i = 0; i < gridsize; i++) {
    array1[i] = [];
    for (let j = 0; j < gridsize; j++) {
      const random_boolean = Math.random() < 0.8;
      if (random_boolean === true) {
        array1[i].push(0);
      } else {
        array1[i].push(1);
      };
    };
  };

  // sets array2 to equal array1
  for (let i = 0; i< array1.length; i++) {
    array2[i] = [];
    for (let j = 0; j< array1.length; j++) {
      array2[i][j] = array1[i][j];
    };
  };
};

// called whenever the next btn is clicked
function next() {
  rowNum = 0;
  neighboursAlive = 0;
  neighboursDead = 0;

  if (isGridClear === true) {
    document.getElementById('outputMessage').innerHTML = 'Everythings Dead, nothing will happen, chill!';
  } else {
    document.getElementById('outputMessage').innerHTML = 'Still here??';
  };

  array1.forEach(funcLoop1);

  // console.log(array1);
  // console.log(array2);

  // makes array1 equal the new array (array2)
  for (let i = 0; i< array1.length; i++) {
    array1[i] = [];
    for (let j = 0; j< array1.length; j++) {
      array1[i][j] = array2[i][j];
    };
  };

  
  //outpudGrid();
  displayOnGrid();
};

// // outputs the grid on browser
// function outpudGrid() {
//   // clears all the paras in div1
//   document.getElementById('div1').innerHTML = '';
//   // outputs the grid on browser window as 1s & 0s
//   for (let i = 0; i < array1.length; i++) {

//     var para = document.createElement("p");
//     var node = document.createTextNode(array1[i]);
//     para.appendChild(node);

//     var element = document.getElementById("div1");
//     element.appendChild(para);
//   };
// };

function displayOnGrid() {
  // console.log(array1);
  
  for (let i = 0; i < gridsize; i++) {
    for (let j = 0; j < gridsize; j++) {
      var idName = ''
      if (i < 10 && j < 10) {
        idName = ('id','td0' + i + '0' + j);
      } else if (i < 10 && j > 9) {
        idName = ('id','td0' + i + j);
      } else if (i > 9 && j < 10) {
        idName = ('id','td' + i + '0' + j);
      } else {
        idName = ('id','td' + i + j);
      }

      if (array1[i][j] === 0) {
        var cell = document.getElementById(idName);
        cell.style.backgroundColor = 'white';
      } else {
        var cell = document.getElementById(idName);
        cell.style.backgroundColor = 'blue';
      };
    };
  };
  
};

// loops through the rows in the grid
function funcLoop1(item, index, array) {
  // console.log(rowNum);
  // console.log(index);


  // top of grid - only check left, right & down
  if (index === 0) {
    item.forEach(topRowLoop);
  } else if (index === gridsize - 1) {
    item.forEach(bottomRowLoop);
  } else {
    item.forEach(middleRowLoop);
  };
  rowNum ++;
};

// Top row of the grid
function topRowLoop(item, index, array) {
  // console.log(index);
  neighboursAlive = 0;
  neighboursDead = 0

  // Only check to see if anything right / down
  if (index === 0) {
    // console.log('top' + item + 'left');
    checkRight(array, index);
    checkDown(array, index);
    checkDownRight(array, index);

  // Only check to see if anything left / down
  } else if (index === gridsize - 1) {
    // console.log('top' + item + 'right');
    checkLeft(array, index);
    checkDown(array, index);
    checkDownLeft(array, index);
  
  // Checks left / right & down
  } else {
    // console.log('top' + item);
    checkRight(array, index);
    checkLeft(array, index);
    checkDown(array, index);
    checkDownRight(array, index);
    checkDownLeft(array, index);
  };
  // console.log('alive ' + neighboursAlive);
  // console.log('dead ' + neighboursDead);
  cellStatus(item, index);
};

// Middle rows of the grid
function middleRowLoop(item, index, array) {
  neighboursAlive = 0;
  neighboursDead = 0
  // Only check to see if anything right / up / down
  if (index === 0) {
    // console.log('middle' + item + 'left');
    checkRight(array, index);
    checkDown(array, index);
    checkDownRight(array, index);
    checkUp(array, index);
    checkUpRight(array, index);
  
  // Only check to see if anything left / up / down
  } else if (index === gridsize - 1) {
    // console.log('middle' + item + 'right');
    checkLeft(array, index);
    checkDown(array, index);
    checkDownLeft(array, index);
    checkUp(array, index);
    checkUpLeft(array, index);
  
  // Checks left / right / up & down
  } else {
    // console.log('middle' + item);
    checkRight(array, index);
    checkDown(array, index);
    checkDownRight(array, index);
    checkUp(array, index);
    checkUpRight(array, index);
    checkLeft(array, index);
    checkDownLeft(array, index);
    checkUpLeft(array, index);
  };

  cellStatus(item, index);
};

// Bottom row of the grid
function bottomRowLoop(item, index, array) {
  neighboursAlive = 0;
  neighboursDead = 0
  // Only check to see if anything right / up
  if (index === 0) {
    // console.log('bottom' + item + 'left');
    checkRight(array, index);
    checkUp(array, index);
    checkUpRight(array, index);
  // Only check to see if anything left / up
  } else if (index === gridsize - 1) {
    // console.log('bottom' + item + 'right');
    checkLeft(array, index);
    checkUp(array, index);
    checkUpLeft(array, index);
  // Checks left / right & up
  } else {
    // console.log('bottom' + item);
    checkRight(array, index);
    checkUp(array, index);
    checkUpRight(array, index);
    checkLeft(array, index);
    checkUpLeft(array, index);
  };

  cellStatus(item, index);
}

// counts dead / alive neighbours for given cell
function checkLeft(array, index) {
  if (array[index - 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkRight(array, index) {
  if (array[index + 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
}
function checkUp(array, index) {
  if (array1[rowNum - 1][index] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkDown(array, index) {
  if (array1[rowNum + 1][index] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkUpLeft(array, index) {
  if (array1[rowNum - 1][index - 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkUpRight(array, index) {
  if (array1[rowNum - 1][index + 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkDownLeft(array, index) {
  if (array1[rowNum + 1][index - 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};
function checkDownRight(array, index) {
  if (array1[rowNum + 1][index + 1] === 0) {
    neighboursDead ++;
  } else {
    neighboursAlive ++;
  };
};

// updates array2 for the cells next state
function cellStatus(item, index) {
  if (item === 1 && (neighboursAlive === 2 || neighboursAlive === 3)) {
    // console.log('Live!');
    array2[rowNum][index] = 1;
  } else if (item === 0 && neighboursAlive === 3) {
    // console.log('Born!')
    array2[rowNum][index] = 1;
  } else {
    // console.log('Die!')
    array2[rowNum][index] = 0;
  };
};



