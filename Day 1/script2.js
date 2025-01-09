// Using rest operator and spread operator return min and max value from any array.

// let arr = [10, 20, 30, 40, 50];

// let [min, ...newArr] = arr.sort((a, b) => a - b);
// let [max] = newArr.sort((a, b) => b-a);

// console.log(min, max);

function minmax(...arguments){
    
    console.log(Math.min(...arguments))
    console.log(Math.max(...arguments))
}


minmax(44,6,8)