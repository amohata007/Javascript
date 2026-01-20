function counter() {
    let count = 0;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    }
}
let tempCounter = counter();
console.log(tempCounter.increment())
console.log(tempCounter.increment())
console.log(tempCounter.increment())
console.log(tempCounter.increment())
console.log(tempCounter.decrement())

function outer(){
    let x = 10;
    function inner(){
        console.log(x);
    }
    return inner();
}
outer()
