// a JS class is syntactic sugar for constructor functions and prototypes

// ES5
function ES5Book(title, author, genre) {
    // what is this (the keyword)?
    // it is a ref to the current object
    this.title = title;
    this.author = author;
    this.genre = genre;

    // adding a method this way results in a new function object for each Book object
    this.review = function() {
        console.log(`Reviewing book ${this.title}...`)
        // TODO
    };
}

// adding a method this way means only review function exists regardless of the # of Book objects
ES5Book.prototype.review = function() {
    console.log(`Reviewing book ${this.title}...`)
    // TODO
}

// the 'new' keyword results in the creation of an empty object
// that object is passed to the function where it is references using 'this'
var es5Book = new ES5Book('The Gruffalo', 'Julia Donaldson', 'Childrens');
es5Book.review();

// ES6
class ES6Book {
    constructor (title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    review() {
        console.log(`Reviewing book ${this.title}...`)
        // TODO
    }
}

var es6Book = new ES6Book("Harry Potter", "JK Rowling", "Fantasy");
es6Book.review();