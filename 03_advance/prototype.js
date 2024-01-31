// const myName = {
//     username:"dheeraj",
//     age:25
// }

// const job = {
//     department:"software (IT)",
//     position:"software engineer"
// }

// Object.setPrototypeOf(myName,job);
// console.log(myName.position);


let anotherUserName = "chaiaurjavascript     ";

String.prototype.trueLength = function()
{
    console.log(this);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.trueLength();
"dheeraj".trueLength();