// modules / promises / classes / block scooping  /babel.

// var : hoisting /redeclaration /scoops /for loop 

// let : block scooping (  { }  )/ no redeclaration / no hoisting

// const : block scooping / no redeclaration / no hoisting / no reassignment

// scoops: Globe (var) is saved in the window object / where (let) is saved in script(module) / block 

// for hoisting (let) is hoisted to the top of the block but not initialized. So you cannot access it before the declaration.

// debugger sees all variables in the current scope. temporary dead zone (TDZ) is the time between the start of the block and the declaration of the variable. so the ref error :Cannot access ' ' before initialization

// const type error: Cannot assign to ' ' because it is a constant. / missing initialization: Missing initializer in const declaration

// function a(){
//     let x =10;
//     function b(){
//         let y= 10
//         console.log(x,y);
//     }
//     b();
// }
// a()


// arrow function differences: no this / no arguments

// default parameters: function a(x=10,y=20){console.log(x,y);}

// destruction : let [x,y] = [10,20] / let {x,y} = {x:10,y:20} for object the variables name should be same as the object keys.

// let arr = [10,20,30,40,50];

// let [x ,...newArr ] = arr

// console.log(x,newArr);

// array methods: map / filter / reduce / find / findIndex / every / some 

// let arr = [10,20,30,40,50];

// let arr1= arr.map((x)=>{return x*20})   // map returns a new array with the same length as the original array. 

// let arr2=arr.filter((x)=>{return x>20}) // filter returns a new array with the elements that pass the test.

// let arr3= arr.reduce((acc,x)=>{return acc+x}) // reduce returns a single value by applying the function to each element of the array.

// let arr4=arr.find((x)=>{return x>20}) // find returns the first element that passes the test.

// let arr5 =arr.findIndex((x)=>{return x>20})  // findIndex returns the index of the first element that passes the test.

// let arr6=arr.every((x)=>{return x>20})  // every returns true if all elements pass the test.

// let arr7=arr.some((x)=>{return x>20})   // some returns true if at least one element passes the test.

// console.log(arr1,arr2,arr3,arr4,arr5,arr6,arr7 ,arr);

/*                                                              Cookies                                                                                  */

let cookie = document.cookie;

function setCookie(key, value,) {
    return document.cookie = `"${key}"="${value}";`;
}

setCookie("name", "sahil");
// console.log(setCookie("age", "10"));

function deleteCookie(key) {
    return document.cookie = `"${key}"=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}

// console.log(deleteCookie("name"));

function getCookie(key) {
    let allCookies = document.cookie;
    let arr = allCookies.split(";");
    let value;
    arr.forEach((x) => {
        let [k, v] = x.split("=");
        if (k.trim() == key) {
            value = v;
            return value;
        }
    });
    return value;
}

// console.log(getCookie("name"));
console.log(getCookie("name"));
