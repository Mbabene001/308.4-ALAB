// Part 1: Original code for splitting CSV string into individual cells
let str =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26';

let placeholder = '';
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

for (char of str) {
  switch (char) {
    case ',':
      if (!cell1) {
        cell1 = placeholder;
        placeholder = '';
        break;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = '';
        break;
      } else {
        cell3 = placeholder;
        placeholder = '';
        break;
      }
    case '\n':
      cell4 = placeholder;
      placeholder = '';
      console.log(cell1, cell2, cell3, cell4);
      cell1 = '';
      cell2 = '';
      cell3 = '';
      cell4 = '';
      break;
    default:
      placeholder += char;
  }
}

// Part 2: Splitting CSV data into arrays

let data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry-Cook,19\n63,Blaine,'Quiz-Master',58\n98,Bill,Doctor,26`;
let array = data.split("\n");
let rows = [];

for (let i = 0; i < array.length; i++){
    rows.push(array[i].split(","));
}
console.log(rows);

// Part 3: Converting CSV data into an array of objects

let data2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry-Cook,19\n63,Blaine,'Quiz-Master',58\n98,Bill,Doctor,26`;
let array2 = data2.split("\n");
let rows2 = [];

for (let i = 1; i < array2.length; i++) {
    let values = array2[i].split(",");
    let rowObject = {};
    let tables = array2[0].split(",");

    for (let k = 0; k < tables.length; k++) {
        rowObject[tables[k].toLowerCase()] = values[k];
    }

    rows2.push(rowObject);
}

console.log(rows2);



// Part 4: Sorting and Manipulating Data

// Remove the last element from the sorted array.
rows2.pop();

// Insert the following object at index 1:
let newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
rows2.splice(1, 0, newObject);

// Add the following object to the end of the array:
let endObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
rows2.push(endObject);

console.log(rows2);

// Calculate the average age of the group
let totalAge = 0;

for (let i = 0; i < rows2.length; i++) {
    totalAge += parseInt(rows2[i].age);
}

let averageAge = totalAge / rows2.length;

console.log("Average Age:", averageAge);

// Part 5: Full Circle - Transform data back to CSV format

// Create an array 
let csvRows = [];

// Push to the array
csvRows.push(Object.keys(rows2[0]).join(','));

// Iterate through the rows and convert each object to a CSV row
for (let i = 0; i < rows2.length; i++) {
    let values = Object.values(rows2[i]);
    csvRows.push(values.join(','));
}

// Join the array of CSV rows into a single string with line breaks
let csvString = csvRows.join('\n');

console.log(csvString);











