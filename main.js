console.log('begin script');

// gimme DOM
console.log(document);
console.dir(document);

// find necessary elements
//2 arrays: types and test-columsn

var types = [undefined, null, true, false, "", "1.2", "one", 0, -0, NaN, Infinity, -Infinity, 1, {}, [], [12], ['something'], function(){} ];

console.log('TYPES \n' + types);
console.log('TYPES LENGTH : ' + types.length);



// generated table
// #table-generated
for (var i = 0; i < types.length; i++) {
  var table = document.querySelector('#table-generated');


  //column: current name
  var newRow = document.createElement('tr');
  var newCell = document.createElement('td');
  var titleNode = document.createTextNode('');
  newCell.appendChild(titleNode);
  newRow.appendChild(newCell);

  //column: number coercions
  var newCell = document.createElement('td');
  var titleNode = document.createTextNode(Number(types[i]));
  newCell.appendChild(titleNode);
  newRow.appendChild(newCell);

  //column: string coercions
  var newCell = document.createElement('td');
  var titleNode = document.createTextNode(String(types[i]));
  newCell.appendChild(titleNode);
  newRow.appendChild(newCell);

  //column: Boolean coercions
  var newCell = document.createElement('td');
  var titleNode = document.createTextNode(Boolean(types[i]));
  newCell.appendChild(titleNode);
  newRow.appendChild(newCell);


  // append all to table
  table.appendChild(newRow);

}


// manualy typed-in html table
// #table-manual
for (var i = 0; i < types.length; i++) {

  //first td
  document.querySelector('#table-manual tr:nth-child(' + (i+2) + ') td:nth-child(2)').innerText = Number(types[i]);

  //second td
  document.querySelector('#table-manual tr:nth-child(' + (i+2) + ') td:nth-child(3)').innerText = String(types[i]);

  //third td
  document.querySelector('#table-manual tr:nth-child(' + (i+2) + ') td:nth-child(4)').innerText = Boolean(types[i]);

}

console.log('end script');
