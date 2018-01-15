//set of helpers 
// filter, some, find, reduce , every, map, forEach

//Hint: They help to avoid using for Loops 

//For Each

var colors= ['red','blue','green'];

// what we want to avoid - Classical For loops
for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);    
}


// with forEach of array helper method
// You pass an anonymous function with an argument
// that is an element of the array 
// which is our iterator
colors.forEach(function(color) {
    console.log(color);
    if(color === 'red'){
        color = 'brown';
    }
});

//Differences, we can't modify our array with forEach methods
console.log(colors);

// Second part

//Create an array of numbers
var numbers = [1,2,3,4,5];
// Create a variable to hold the sum
var sum = 0;

//we can create a method for the for each method to run

function adder(number) {
    sum += number;
}

// loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
    //our logic to sum
    sum += number;
});

// Another example
// numbers.forEach(adder);

// print the sum variable
console.log(sum);
