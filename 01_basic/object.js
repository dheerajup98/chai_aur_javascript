
console.log("objects in javascript");

// symbol

const mySmb = Symbol("key1");

const obj1 = {
    name:"dheeraj",
    age:25,
    [mySmb] : "mykey1",
    email: "dheerajup98@gmail.com",
    myfunction: function(){
        console.log("myyfunction is declared");
    }
}


console.log(typeof obj1 [mySmb]);

//  example

const person = {
    myNmae: "dheeraj upadhyay",
    age: 25,
    calling: function()
    {
        console.log("dheeraj calling");
    }
    
}

console.log(person.calling());
console.log(person.age);

const myDetails = [
        {founder: "Dheeraj Upadhyay", myAge: 25},
        {somethingHappen:"kasam"}
];

//more on objects

// by constructor
// singelton

const obj = new Object()

console.log(obj);

const myobj = {}

myobj.id = 1,
myobj.name = "dheeraj upadhyay",
myobj.email = "dheerajup98@gmail.com"

console.log(myobj);


// const ak = {
//   name: "hitesh",
//   email:"gku@gamil.com",
//   dob: "01/12/1997"
// }

// const bk = {
//   name: "sameer",
//   email:"gku@gamil.com",
//   dob: "01/12/1998"
// }

// const ck3 = Object.assign({},ak,bk);


// console.log(ck3);

const ak = {
  name: "hitesh",
  email:"gku@gamil.com",
  dob: "01/12/1997"
}

const bk = {
  name: "sameer",
  email:"gku@gamil.com",
  dob: "01/12/1998"
}

const ck3 = {...ak, ...bk};
console.log(ck3);

console.log(Object.keys(ak));
console.log(Object.values(ak));
console.log(Object.entries(ak));

console.log(ak.hasOwnProperty('dob'));

const course = {
  instructor:"hitesh",
  subject: "javascript",
  reference: "dheeraj"
};

const {subject,instructor,reference} = course;

console.log(subject,instructor,reference);
