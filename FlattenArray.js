let arr = [1,2,[2,3,[1,2,[1]],4],5,[6,5]];

// console.log(arr.flat(Infinity))

let res = [];

function flatten(arr){
    for(let i of arr){
        if(Array.isArray(i)){
            flatten(i);
        }
        else{
            res.push(i);
        }
    }
    return res;
}
console.log(flatten(arr));