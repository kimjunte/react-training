// since ES6 we should no longer use var
// 'let' and 'const' should be used, 


// let and const are block scoped
// ES5
for (var i = 0; i < 10; i++) {
    // TODO
}

console.log(i); // 10; variables exists outside scope with 'var'


// ES6
for (var j = 0; j <10; j++) {
    // TODO
}

console.log(j); // Error!

// let and const can not redecalred
let x = 1
let x = 3; // can not do in same scope as 'x' is already used

// const variables CANNOT be reassigned
// constancy != immutability
const x = 1;
x = 2; // Error!

const y = [1];
y[0] = 2; // OK, as ref hasn't changed but the object is mutuable

// IMO const should be your default and only use let when the variables must be reassigned