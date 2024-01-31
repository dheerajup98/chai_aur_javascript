// // first way to create promise and consumed

// const firstPromise = new Promise((res,rej)=>{
//     setTimeout(()=>{
      
        
//         res()
//     },1000);
// });

// firstPromise.then(()=>{
//     // console.log("promise resolved");
// });



// // Second way 

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // console.log("second promise");
//         resolve()
//     },1000)
// }).then(()=>{
//     // console.log("second promise is resolved");
// })



// // third way

// const threePromise = new Promise((res,rej)=>{
//     setTimeout(() => {
//         // console.log("third promise");
//         // res({username:"dheeraj",age:25});
//     }, 1000);
// });

// threePromise.then((user)=>{
//     // console.log("third promise is resolved",user);
// })



// fourt way

// const fourPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({myName:"DKU",searching:"job"})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     },1000)
// })


// fourPromise
// .then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//      console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally either resolve or reject");
// })




// five way


// const fivePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error)
//         {
//             resolve({sub:"javascript",instructor:"hitesh sir"})
//         }
//         else
//         {
//             reject('ERROR: something wrong');
//         }
//     })
// })

// async function promiseConsumed()
// {
//     try
//     {
//         const response = await fivePromise;
//         console.log(response);
//     }
//     catch(error)
//     {
//        console.log(error);
//     }
// }

// promiseConsumed()


const myPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error = true;
        if(!error)
        {
            res({myName:"dheeraj upadhyay",age:25})
        }
        else{
            rej('ERROR: something wrong');
        }
    })
})

async function getAllUser()
{
    try{
        const info = await myPromise;
        console.log(info);
    }
    catch(error)
    {
        console.log(error)
    }
}

getAllUser()



// async function myusers()
// {
//     try{
//         const theysay = await fetch('')
//     }
// }