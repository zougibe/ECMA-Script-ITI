// - Study new array api methods then create the following methods and apply
// it on this array

// ```jsx
// let fruits = ["apple", "strawberry", "banana", "orange",
// "mango"];
// ```

// a. test that every element in the given array is a string 
// b. test that some of array elements starts with "a"
// c. generate new array filtered from the given array with only elements that
// starts with "b" or "s"
// d. generate new array each element of the new array contains a string
// declaring that you like the give fruit element 

// “I like ” + fruit[0]
// e. use `forEach` to display all elements of the new array from previous point.


let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let stringArr = fruits.every((fruit) => {
    return typeof fruit === "string";
});
console.log(stringArr);

let stringStartWithA = fruits.some((fruit) => {
    return fruit.startsWith("a");
});
console.log(stringStartWithA);

let newArr = fruits.filter((fruit) => {
    return fruit.startsWith("b") || fruit.startsWith("s");
});
console.log(newArr);

let newArr2 = fruits.map((fruit) => {
    return `I like ${fruit}`;
}
);

console.log(newArr2);

newArr2.forEach((fruit) => {
    console.log(fruit);
});
console.log(newArr2);
