"use strict"
// Math object has static methods 
//  static method that is only accessible only from the parent
// private methods are not accessible outside the class
// import{ User as U /* to rename it */  } from "path"



/*
class User {
    constructor(n, a) {
        if (this.constructor == User) {
            throw "this is abstract"
        }
        this.name = n
        this.age = a
    }
    display() {
        console.log(this.name, this.age);
    }
}

// inheritance of classes use "extends" on the class and "super" in the constructor

class Employee extends User {
    // private member

    #salary;  //just declare it with #

    constructor(n, a, s) {
        super(n, a)
        this.#salary = s
    }
    // set and get
    get getSalary() {
        return this.#salary
    }

    set setSalary(val) {
        this.#salary = val
    }

    calcSalary() {
        console.log(this.salary);

    }

    static staticMethod() {
        console.log("static");
    }
    static counter = 0;

    #privateMethod() {
        console.log("private");

    }
}

class Student extends User{
    constructor(n,a,g){
        super(n,a)
        this.grades = g
    }

    calcGrades(){
        return this.grades
    }
}

Employee.staticMethod()

*/


/*                                                               Proxy                                                                        */

/*


let handler = {
    get: function(target , prop, prox){
        if(!target.hasOwnProperty()){
            throw "No"
        }
        return target[prop]
    }

    set: function(target, prop, val ,prox){
        if(!(prop in target)){
            throw "No"
        }

        if(typeof val != "number"){
            throw "no"
        }
        target[prop]=val 
    }
}


*/


/*                                                          ############Symbol                                                                        */


/*
// is used to create ids




*/
let s1 = symbol("my var")  //symbol is a unique value
let s2 = symbol("my var")  //s1 != s2


let arr=[1,2,3,4]

for(const ele of arr){
    console.log(ele);
    
}




/*                                                                     #######generator                                                               */


