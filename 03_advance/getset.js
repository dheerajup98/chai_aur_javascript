class user{
    constructor(username,email)
    {
        this.username = username;
        this.email = email;
    }

    set username(value)
    {
       this._username = value;
    }

    get username()
    {
        return this._username.toUpperCase();
    }

    set email(val)
    {
       this._email= val;
    }

    get email()
    {
        return this._email.toUpperCase();
    }


}

const myProfile = new user("dheeraj","dherrk2@gmail.com");
console.log(myProfile.username);
console.log(myProfile.email);