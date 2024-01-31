console.log("lexical scoping and closures in js");

function createName()
{
    let a = 25;
    const b = "hii coders";
    function setPass(){
        console.log(a);
    }
    function hii()
    {
        console.log(b);
    }

    return hii;
}

const m = createName();
m();