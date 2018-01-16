// Finding Admin Users
// Find the user in the users's array who is an admin. 
// Assign this user to the variable 'admin'.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => user.admin === true);
// console.log(admin);

// What's Your Balance?
// Find the account with a balance of 12 
// and assign it to the variable 'account'.

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((acc) => acc.balance === 12);


// Really Challenging: Custom findWhere Helper
// This is a tough one!  The most common find operation 
// is to an object that has a given property.  
// Rather than writing out a full function every time, 
// it would be great if we has a shorthand syntax to find 
// an object like this:
// findWhere(ladders, { height: '20 feet' });
// The object { ladders: '20 feet' } should be used 
// as the search criteria - we would want to find
// a ladder whose 'height' property was '20 feet';
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];
// const criteria = { height: 20 };

// console.log(Object.keys(criteria)[0]);

function findWhere(array, criteria) {
  const comp = Object.keys(criteria)[0];  
  return array.find((elem) => elem[comp] === criteria[comp]);
}

console.log(findWhere(ladders, { height: 25 }));
