//Array 
let arr = ["a","b","c","d"];

let [x,y,,z] = arr;
console.log(x,y,z)

//Object 
let obj = {
    name: "Abhi",
    profession: "Senior Software Engineer",
    city: "Surat",
    number: 7
};

let {name,profession,city,number} = obj;
console.log(name,number)