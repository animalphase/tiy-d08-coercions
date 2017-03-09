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
