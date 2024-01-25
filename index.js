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