console.log("stack and heap memory concept in js");

let myName = "dheeraj upadhyay";

let mySecond = myName;

mySecond = "suresh";

// stack memory 
// primitive data type

console.log(myName);
console.log(mySecond);

// Heap memory contain object (reference data type)

// non primitive data type

let person = {
    name:"dheeraj",
    age: 25
};

let person2 = person;

person2.name = "aadesh"

console.log(person.name);
console.log(person2.name);



