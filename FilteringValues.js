// Filtering Values
// Filter the array of numbers using the filter helper,
// creating a new array that only contains numbers greater than 50. 
// Assign this new array to a variable called 'filteredNumbers'.
// Don't forget to use the 'return' keyword in the function!

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((elem) => elem > 50, 0);
filteredNumbers.forEach(element => {
  console.log(element);
});



// //Challenge 2

// Handling Permissions with Filter
// Filter the array of users, 
// only returning users who have admin level access. 
// Assign the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function!


var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];

  
 var filteredUsers = users.filter((user) => user.admin === true, 0);
 filteredUsers.forEach((elem) => console.log(elem));

// Challenging! Implementing 'reject'.
// This is a hard one!  Create a function called 'reject'.
// Reject should work in the opposite way of 'filter' 
// - if a function returns 'true', 
// the item should *not* be included in the new array. 

// Hint: you can reuse filter.


// For example:

 const numeros = [10, 20, 30];
// var lessThanFifteen = reject(numeros, function(number) {
//   return number > 15;
// }); 
// console.log(lessThanFifteen); // [ 10 ];

var reject = function(array, iteratorFunction) {
  return array.filter((elem) => {
    //return only what 'fails' the test
    return !iteratorFunction(elem);
  });   
};

reject(numeros, function(number) {
  return number > 15;
}).forEach((elem) => {
  console.log(elem);
});

