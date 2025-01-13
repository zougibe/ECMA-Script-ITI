/*
Create a generator that returns fibonacci series that takes only

one parameter. Make two different implementations as described below:

1. the parameter passed determines the number of elements

displayed from the series.

1. the parameter passed determines the max number of the displayed series should not exceed its value.

*/

function* fibonacciElements(n) {
    let a = 0, b = 1, count = 0;
    while (count < n) {
        yield a;
        [a, b] = [b, a + b];
        count++;
    }
}

const fibElements = fibonacciElements(10);

for (let num of fibElements) {
    console.log(num);
}


function* fibonacciMaxValue(max) {
    let a = 0, b = 1;
    while (a <= max) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibMaxVal = fibonacciMaxValue(50);
for (let num of fibMaxVal) {
    console.log(num);
}

var person = { name: "Lydia" };
Object.defineProperty(person, "age", { value: 21 });
console.log(person);
console.log(Object.keys(person));