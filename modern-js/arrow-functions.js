// an arrow functions is an anonymous function
// anoymous function = function without a name

// ES5
var es5Circ = function(radius) {
    // TODO
}

console.log(es5Circ(2));

// ES6
const es6CircV1 = (radius) => {
    // TODO
}

// if there is only one parameter then we can do away with the brackets
const es6CircV2 = radius => {
    // TODO
}

// if there is only one line of code then we can do away with the curly bracess
// if you omit the braces you must omit the return keyword
const es6CircV3 = radius => 2 * Math.PI * radius;
const es6CircV3 = radius => {return 2 * Math.PI * radius;}  // ask about this

// arrow function were traditionally used to implement callbacks
const nums = [1, 3, 5, 7, 9];
nums.forEach( num => console.log(num));