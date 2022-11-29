const sum = arr => {
  return arr.reduce((acc, currentVal) => acc + currentVal);
}

console.log(sum([5,6,7]));