console.log("map in js");

const n = [2,56,89,47,34,5,99];

const ny = n.map((i)=>i*3)
            .map((i)=>i+6).filter((i)=>i>=50);

            // console.log(ny);


// ques)

const users = [
    {firstname:"dheeraj",lastname:"upadhyay",age:25},
    {firstname:"saket",lastname:"tiwari",age:22},
    {firstname:"anivdhya",lastname:"gupta",age:32},
    {firstname:"aradhya",lastname:"pandey",age:26}
];

const fullname = users.map((x)=>{
    return x.firstname+" "+x.lastname;
});

// console.log(fullname);


let students = [
    {name:"dheeraj", rollNumber :23, marks:233},
    {name:"suresh", rollNumber :15, marks:110},
    {name:"dheeraj", rollNumber :35, marks:150},
    {name:"dheeraj", rollNumber :27, marks:333},
    {name:"dheeraj", rollNumber :29, marks:345}
];






