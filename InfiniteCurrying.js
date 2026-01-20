// Chained operations where you don’t know the number of inputs ahead of time.

function result(a){
    return function inner(b){
        if(!b){
            return a;
        }
        return result(a+b);
    }
}

console.log(result(1)(2)(3)(4)(5)())