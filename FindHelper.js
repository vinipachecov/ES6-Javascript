
const users = [
  { name: 'jill' },
  { name: 'Alex' },
  { name: 'Bill' }, 
  { name: 'Alex' },
];

var user;
//classical approach to find an element in an array
for (let index = 0; index < users.length; index++) {
  if (users[index].name === ' Alex') {
    user = users[index];
    break;
  }   
}

//Approach using find

console.log(users.find((elem) => {
  return elem.name === 'Alex';
}));

function Car(model) {
  this.model = model;
};


// Another example
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus'),
];

console.log(cars.find(function(car) {
  return car.model === 'Focus';
}));



// post type structure using find

var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' },
];

const comment = { postId:1, content: 'Great Post' };

function postForComment( posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

