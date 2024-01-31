// console.log("arrow and this in js");


const information = {
    username: "Dheeraj upadhyay",
    address: "Ballia",

    contact: function()
    {
        console.log(`${this.username} , called`);
        // console.log(this);
    }
}



// information.contact();

function chai()
{
    console.log("chai pe charcha");
    console.log(this);
}
// chai();



// Arrow function

const arw = ()=>{
    console.log("arrow func called");
    console.log(this);
}

arw();


// explicit arrow function

const myfunc = (num1,num2)=>{
  return num1+num2;
}

console.log(myfunc(23,56));



// implicit arrow function

const myfunc2 = (num1,num2)=>(num1+num2);

console.log(myfunc2(25,89));