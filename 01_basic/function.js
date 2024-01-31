console.log("Function in javascript");

function printMyName()
{
    console.log("dheeraj upadhyay");
}

printMyName();

function setCourse(mycourse)
{
    console.log(`my course is: ${mycourse}`);
}

setCourse("javascript");


// more on functions

function calculateCartPrices(...num)
{
  return num;
}

console.log(calculateCartPrices(55,899,665));

// function with object


const handleObject =
{
  username: "dheeraj upadhyay",
  age: 25
};

function objectsMapping(anyobject)
{
   console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

objectsMapping(handleObject);

// function with array

const ShopingCartPrices = [654,899,3665,7788,233];

function Allprices(myarray)
{
  return(myarray[2]);
}

console.log(Allprices(ShopingCartPrices));

// scope and mini hosting

// let a = 25;
// const b = 66;
var c = 44;

{
  var b = 25;
}

// console.log(a);
console.log(b);
console.log(c);

mussoorie()

function mussoorie()
{
  console.log("queen of mountain");
}


m();
const m = function haridwar()
{
  console.log("bhagwan ji");
}

// m();