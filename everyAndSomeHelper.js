// Usage of every instead of a foor loop

const computers = [
  { name : 'Apple', ram: 24 },
  { name : 'Compaq', ram: 128 },
  { name : 'Acer', ram: 32 },
];

//classical approach with a for loop

var allcomputersCanRunProgram = true;

var onlySomeComputersCanRUnProgram = false;

for (var i = 0; i< computers.length; i++) {
  if (computers[i].ram < 16) {
    onlySomeComputersCanRUnProgram = true;
  } else {    
    allcomputersCanRunProgram = true;
  }
} 

console.log(onlySomeComputersCanRUnProgram); // false

console.log(allcomputersCanRunProgram); // true


//approach using every
console.log(computers.every((computer) => {
  return computer.ram > 16;
})); // True

// Conclusion
//what the every does is a chain of ands 
// based on a conditional
// so if one fails, it returns false
// otherwise it returns true.

//Some

console.log('Some computers has ram bigger than 4 -> ' + computers.some((computer) => {
  return computer.ram > 256;
})); //true

// Conclusion
//what the some does is a chain of OR logical operations 
// based on a conditional
// so if at least one is return it returns true
// if all are false then it returns false.


//Continue...
var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

//Are all names bigger than 4? // false
console.log(names.every((name) => {
  return name.length > 4;
}));

//Does some names are bigger than 4 // true
console.log(names.some((name) => {
  return name.length > 4;
}));

//Another example with fields....
// validation with forms

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Filed('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

// username.validate() && password.validate();
//what if we want to add new properties?
//we would need to change the validation method every time.
var fields = [username, password, birthdate];

const formIsValid= fields.every(function(field) {
  return field.validate();
})


if (formIsValid) {
  //allow user to submit...
} else {
  
}
