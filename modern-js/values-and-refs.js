// Immutable means can't be changed
// mutuable means can be changed

// we're are taught that some variables contains values and other contain refs
// IMO you should treat all variables as containing refs and all data as objects

var x = 1;
var y = x; // the contents of x (a ref) is copied into y

// both x and y ref the same number object
y += 1; // is x affected? NO; because numbers are immutable and so javascript creates a new object (2) and updates y-ref

console.log("y is ", y);
console.log("x is ",x);

// ---

var x = [1];
var y = x;
y.push(2) // is x affected? YES; because lists are mutable so JS need not create a new array object
console.log("y is ", y);
console.log("x is ",x);

// ---
var x = {name: 'Dave'};

function changeName(personObj) {
    personObj.name = "David";
}

// when we call the function we copy x's ref into the param named personObj
// botch x and personObj ref the same object
changeName(x) // is x affected? YES because objects literals are mutable

// ---

// Q. instances of which of the built-in JS data types are mutable?
// A. array, object and function are mutable; boolean, number, and string are immutable.

// ---
// Q. is it possible to ccreate your own immutable data types in native JS?
// A. NO - there are third party libraries to help, Immutable.js


// ---
var x = 1;

function changeName(personObj) {
    personObj = 2;
}

changeName(x)
