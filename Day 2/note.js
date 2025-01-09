// Promises is a way to overcome the callback hell

// promise is an Object they can be sync or Async depending on the code inside the promise
/*
syntax:



let p = new Promise(function (resolve,reject) {
    console.log(arguments);
    let isData = false;
    // you but it in an if condition
    if(isData){
        resolve("mai") // => fulfilled state
    }else{
        reject("id is not defined") // => not fulfilled state

    }

})

p.then(function (data) {
    console.log("fulfilled" , data); //=>state fulfilled then return the  promise
}).catch(function (err) {
    console.log("error not fulfilled", err);  //=>state not fulfilled
})

you look at the return of any function and you can use this return on any other function or whatever


const p = new Promise(function(resolve, reject){
    setTimeout(function(){
        let ids=[1,2,3]
        if(ids){
            resolve(ids)
        }else{
            reject()
        }
    },2000)
})

p.then(function(){



    // return other function and then use the "then" on it again

}).catch(function(){

})


*/


/*

Async/Await

you should use Await with promises  and you cant use await without async function  and the async function returns promise
promises comes first in execution if there is a same setTimeOut with the same time


// execution stack => web API => two types of event loop micro (priority) has promises ,macro has any other async code

syntax:


async function test(){
    let ids = await getIds();
    let user = await getUserById(ids)
    let cart = await getCartById(user.cartId)
    console.log(ids,user),cart;
}

test()

*/

/*
fetch

async function getUsers(){
    try{
    let p = await fetch("https://jsonplaceholder.typicode.com/users")
    let arr = await p.json();
    displayUsers(arr)
    }catch(err){
        console.log(err);
    }
}

getUsers()

function displayUsers(users){
    users.forEach(user => {
        console.log(user.id , user.name);
        
    });
}

*/


/*
promises APIs
promise.all()
promise.allSettled()
promise.race()
promise.any()
*/