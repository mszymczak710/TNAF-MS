function isOdd(x) {
  if (x % 2 == 0) return false;
  return true;
}

const isEven = x => {
  if (x % 2 != 0) return false;
  return true;
}

console.log(isEven(5));
console.log(isOdd(5));