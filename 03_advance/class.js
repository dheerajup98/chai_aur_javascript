// class user{
//     constructor(username,password,email){
//           this.username = username;
//           this.password = password;
//           this.email = email;
//     }

//      encryptPassword()
//     {
//        return (`${this.password}abc`)
//     }
// }


// const myProfile = new user("dheeraj",123,"dheeraj122@gmail.com");

// console.log(myProfile.encryptPassword());
// console.log(myProfile.username);


// inheritance

class User{
    constructor(username)
    {
       this.username = username;
    }
    logMe()
    {
        console.log(`username is logged ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        super(username);
        this.email = email;
        this.password = password;
    }
    static course()
    {
        console.log(` course is ${this.username}`);
    }
}


const myProfile = new Teacher("dheeraj","dheerajuo655@gmail.com",5555);
myProfile.course();

const myUser = new User("javascript");
myUser.logMe();

console.log(myUser === myProfile);
console.log(myUser instanceof User)
