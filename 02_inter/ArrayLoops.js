console.log('high order Array loops');

const num = [21,89,56,777,66,32,55];

for (const n of num) {
//    console.log(`the value is ${n}`);   
}

const str = "dheeraj upadhyay";

for (const s of str) {
    // console.log(s);
}


const person = [
    {name:"dheeraj",age:25},
    {name:"suresh",age:55}
];

for (const p of person ) {
//    console.log(p);  
}

// Map 


const m = new Map();

m.set('name',"dheeraj");
m.set('age',25);

console.log(m);

for (const [key,value] of m) {
//  console.log(key,value);    
}



// object loops

const myObj = {
    MyName:"dheeraj",
    Age: 25,
    Address: "Ballia"
};

for (const key in myObj) {
//    console.log(myObj[key]);
}


// Array iterate by for in loop

const myInform = ["sumit","ravi","dheeraj","suresh"];

for (const m in myInform) {
    //  console.log(myInform[m]);
}


// foreach loop

const trending = ["sku","jeans","plazo",'sakhi'];

trending.forEach((item)=>{
//  console.log(item);
});


const trends = [
    {name:"dheeraj",latestNews:"looking for job"},
    {name:"sudhir",latestNews:"got a job"},
    {name:"swadesh",latestNews:"good position in company"}
];

trends.forEach((i)=>{
  console.log(i.latestNews);
});