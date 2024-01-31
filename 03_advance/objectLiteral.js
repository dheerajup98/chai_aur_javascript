// const obj1 = {
//     username:"dheeraj upadhyay",
//     isLoggedIn: true,
//     count: 1,
//     getName: function()
//     {
//         console.log(`my username${this.username}`)
//     }
// }

// console.log(obj1.getName());


// constructor function

function getAll(user, logged, cout)
{
    this.user = user;
    this.logged = logged;
    this.cout = cout;

    this.myfunc = function()
    {
        return (`this is my reality ${this.user}`)
    }
    return this
}

const userone = new getAll("dhirendra", false, 2);
console.log(userone);
const usertwo = new getAll("suresh",true,5);
console.log(usertwo);