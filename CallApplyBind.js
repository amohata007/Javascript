// call() is used to invoke a function with an explicitly specified this value. 
// Put together in simple English ✅
// call() runs a function and forces it to use the object you provide as this.
// Function borrowing is one common use case.

// apply() is almost the same as call(),
//  but it takes arguments as an array instead of comma-separated values.


// bind() returns a new function with this permanently set to the object you provide.
// Unlike call() or apply(), it does NOT immediately execute the function.
// It just creates a copy of the function with this “locked in.”

const Student = {
    name: "Shyam",
    place: "Jaipur",
}

//Function Borrowing
const printName = function(hobby,state){
    console.log(this.name + " " + hobby + " " + state);
}

const Student2 = {
    name: "Ram",
    place: "Ayodhya",
    printName: function(){
        console.log(this.name);
    }
}
printName.call(Student,"Devote","Raj");
printName.apply(Student,["Devotional","Rajasthan"])
printName.call(Student2,"Jaii","UP");

let funcBind = printName.bind(Student,"Devote","Raj");
funcBind();