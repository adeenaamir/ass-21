// 1. Declare an empty array using JS literal notation
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let fruits = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array
let numbers = [10, 20, 30, 40];

// 5. Declare and initialize a boolean array
let booleans = [true, false, true, false];

// 6. Declare and initialize a mixed array
let mixedArray = ["John", 25, true, null];

// 7. Declare and initialize an array of qualifications in Pakistan
let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD"
];

// Display the qualifications in the browser
document.write("<h3>Qualifications in Pakistan:</h3>");
document.write("<ol>");
for (let i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");


