console.log("filter method in javascript");

const myNum = [21,56,89,33,66,78,66];

const m = myNum.filter((item)=>{
     return item>50;
});

// console.log(m);


// foreach loop not return anything

// but we try to solve

const newNum = [];

myNum.forEach((i)=>{
    if(i>30)
    {
    (newNum.push(i));
    }
});


// console.log(newNum);

// ques:)

// let students = [
//     {name:"dheeraj", rollNumber :23, marks:233},
//     {name:"suresh", rollNumber :15, marks:110},
//     {name:"dheeraj", rollNumber :35, marks:150},
//     {name:"dheeraj", rollNumber :27, marks:333},
//     {name:"dheeraj", rollNumber :29, marks:345}
// ];


const total = students.filter((i)=>{
    return i.marks>150 && i.rollNumber>15
});

// console.log(total);




