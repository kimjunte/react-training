// closures are used by React Hooks to enable us to make stateful, functional components
// a closure is a function including it's lecically scoped variables

const getNextNumber = () => {
    let num = 1;
    return num++;
}

console.log(getNextNumber()); // 1
console.log(getNextNumber()); // 1
console.log(getNextNumber()); // 1

const getNextNumberClosure = () => {
    let num = 1;
    // to the returned function, num is a lexically scoped variable; it is a declared outside
    return () => num++; // the function object maintains a reference to line 14 of 'num = 1'
}

const nextNumberClosure = getNextNumberNumberClosure();
console.log(nextNumberClosure()); // 1 
console.log(nextNumberClosure()); // 2 
console.log(nextNumberClosure()); // 3
