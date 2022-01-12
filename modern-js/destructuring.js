// destructing is used to assign elements of an array/props of an object to variables
var nums = [1, 2, 3];
var person = {name: 'Dave', age: 21}

// ES5
var n1 = nums[0];
var n2 = nums[1];
var n3 = nums[2];

var personName = person.name;
var personAge = person.age;

// ES6
var [n1, n2, n3] = nums;

// object destructuring provides for aliiasing and default values
var {name: personName, age: personAge} = person;

// default value
var {name: personName, age: personAge, height: personHeight} = person; // personHeight = undefined
var {name: personName, age: personAge, height: personHeight = 1.6} = person; // personHeight = 1.6, IF person does not have person.height

// destructuring is also commonplace in React functions, this is the same
function renderPerson(person) {
    var {name, age} = person;
    // TODO
}

function renderPerson({name, age}) {
    // TODO
}

function renderPerson({name, age}, [n1, n2, n3]) {
    // TODO
}