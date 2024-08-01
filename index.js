/*
A closure in JavaScript is a function that has access to variables in its parent scope, even after the parent function has returned. 
Closures are created when a function is defined inside another function, and the inner function retains access to the variables in the outer function's scope.
*/

const x = () => {
    let count = 0;
    return () => {
        count = count + 1
        return count;
    }
}

const a = x();
const b = x();
const c = x();

a(); //0 -> 1
a(); //1 -> 2
b(); //0 -> 1

console.log(a()); //2 -> 3
console.log(b()); //1 -> 2
console.log(c()); //1
