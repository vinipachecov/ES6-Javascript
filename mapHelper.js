// Map helps us to use a function or
// a logic of code into every element
// of an array and return the new array
// modified by the function
// not changing the original array

var numbers = [1,2,3];

var doubleNumbers = [];

// this implementation we use a function
// that will get the iterator and
// apply the code logic for each index
// of our array
// returning our new array 
doubleNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubleNumbers);

var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Camaro', price: 'expensive' }    
];

//with map we can go through properties
// of our array with a different approach also
// we don't need to actually modify our 
// original array but this is our common use.
var prices = cars.map(function(car) {
    return car.price;
});

console.log(prices);
