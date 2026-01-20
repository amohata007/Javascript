let arr = [1,2,[2,3,[1,2,[1]],4],5,[6,5]];
//Using BuildIn Method
// console.log(arr.flat(Infinity))


function flatten(arr, depth, res = []) {
    for (let i of arr) {
        if (Array.isArray(i) && depth > 0) {
            flatten(i, depth - 1, res);
        } else {
            res.push(i);
        }
    }
    return res;
}
console.log(flatten(arr, 2));