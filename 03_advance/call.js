function setUserName(username)
{
     this.username = username;
     console.log("called");
}

function createUserName(username,email,password)
{
    setUserName.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new createUserName("dheeraj","dheeraj55@gmail.com",5552);
 console.log(chai);