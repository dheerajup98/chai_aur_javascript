const mynum = [88,55,33,66,44,22,99,77];

const newnums = mynum.reduce((acc,curr)=>{
    return acc+curr; 
},0);

// console.log(newnums);


let students = [
    {name:"dheeraj", rollNumber :23, marks:233},
    {name:"suresh", rollNumber :15, marks:110},
    {name:"dheeraj", rollNumber :35, marks:150},
    {name:"dheeraj", rollNumber :27, marks:333},
    {name:"dheeraj", rollNumber :29, marks:345}
];

const totalMarks = students.reduce((acc,item)=>{
    return acc+item.marks; 
},0)

console.log(totalMarks);





