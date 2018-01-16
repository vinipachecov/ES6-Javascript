//Reduce we can use 'like' all the other helper methods
//Let's see a classical approach and then use it with reduce


const numbers = [ 10, 20, 30, 40 ];

var sum = 0;

//A classic sum of elements of an array

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
  
}

// with reduce...
console.log('The sum of all the numbers in the array is -> ' + numbers.reduce((sum, number) => {
  return sum + number;
},0));

//What happens here is that for every iteration, 
// which is for every element in our array,
// our function is called with the arguments passed
// one will be the sum and the other is our element
// the last element will always be the element of the array

//      About the second argument of reduce
//Another example
const primarycolors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// As you can see here, the second argument of reduce is now []
// instead of 0 like the previous case.
// This is because the first argument (the accumulator), that will
// be called every iteration with the element of the iteration
// is now an array!

// Conclusion:
// The second argument of the reduce method always is related to the
// type of value we intend to accumulate. In this case we wanted
// to accumulate the name of the colors inside the objects of 
// the variable 'primarycolors', so the initial value of the array
// needed to be [].

console.log(primarycolors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);    
  return previous;  
}, []));

//Another examples of where to use reduce
//Balanced parentheses problem

//we want a function that say that a expression is balanced or not
// ()() is balanced

//create a counter with reduce so every time we have a openning parens
// we sum 1 to the acc
// when we found a closing one we decrease 
// the sum must be 0 to be balanced
// otherwise it is unbalanced

function balancedParens(string) {
  //if we put a '!' infront of the string return
  
  return !string.split("").reduce((prev, char) => {
    //first if is to check if the string is not
    // in a messy order    
    if ( prev < 0) {
       return prev; 
    }
    if (char === '(') {
      return ++prev;
    } 
    if (char === ')') { 
      return --prev;
    }
    return prev;
  }, 0);
}

console.log(balancedParens('(((())))'));
