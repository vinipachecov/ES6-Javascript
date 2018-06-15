const numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((prev, cur) => { 
    console.log(prev);
    if (!prev.find(elem => {
      return elem === cur;
    })) {
     prev.push(cur);     
    }
    return prev;
  }, []);
}

const res = unique(numbers);
console.log(res);
