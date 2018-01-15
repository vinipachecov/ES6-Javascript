//Filter method

const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }    
];

let filteredProducts = [];

// classic approach

for (let index = 0; index < products.length; index++) {
    if (products[index].type === 'fruit') {
        filteredProducts.push(products[index]);
    }    
}

//printing our different array
filteredProducts.forEach((prod) => console.log(prod));

//using filter helper
//Filter take an element and check if our logic our function
//that we passed matches a specific conditional
//if the element matches the conditional it gets returned

//Here we have the same code using filter
console.log(products.filter((prod) => {
    return prod.type === 'fruit';
}));

//Here we get the same result, getting the same fruit values
// but with less ammount of code.

// type vegetable, quantity is greater than 0, price is less than 10

console.log(products.filter((product) => {
    return product.type === 'fruit' && product.quantity > 0 && product.price < 10;
}));

//
