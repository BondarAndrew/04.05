
//ex1
let numbers = [12, 21, 10, 50, 35, 67, 34, 61, 91, 4];

let newArray = numbers.map(function(e) {return e * 100;});
console.log(newArray);

//ex2
let strings = ['hi', 'Andrew', 'apple', 'people'];

let newwArray = strings.map(function(e) {return e.length;});
console.log(newwArray);

//ex3
let array = [101, 221, 10, 560, 35, 67, 734, 61, 91, 84];

let filtration = array.filter(function(e) {
    if (e > 100) {
        return false;
    }
    else {
        return true;
    }
})

console.log(filtration);
