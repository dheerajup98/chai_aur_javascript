console.log("Array in js");

const myArr = ["Dheeraj","aakash","yamini","aadesh"];


myArr.push("shaktiman");

// console.log(myArr);

const myArr2 = new Array(5,7,8,9,12,46);


// console.log(myArr2[5])

// Array methods

// console.log(myArr2.pop());
// console.log(myArr2);

console.log(myArr2.unshift("ss"));

console.log(myArr2);

console.log(myArr2.shift());

const myArr3 = [5,8,9,35,6,4];

console.log(myArr3.map((i)=>{
  return i*3;
}))


// spread operator


const arr1 = [55,99,77,33];
const arr2 = [89,56,23,45];

const join = [...arr1, ...arr2];
console.log(join);

const first_sec = [455,89,66,[65,89,],89,78,[56,89]];

console.log(first_sec.flat(Infinity));

console.log(Array.isArray([56,89]));

// convert to array

console.log(Array.from("dheeraj"));

// Return empty array

console.log(Array.from({name:"fakir"}));



// example


const sde = [56,89,78,32,66];

// sde.push("janki");
// sde.unshift("delhi");

// console.log(sde);

const sde2  =   sde.map((i)=>{
 return  i*3;
});

console.log(sde2);

// slice

const cid = ["raghendra","sammy","gku","kasam"];

// const out = cid.slice(0,2);

cid.splice(0,1,"rakesh");


console.log(cid);















