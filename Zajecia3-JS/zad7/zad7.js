const isHappyNumber = (number, counter = 0) => {
  if (counter < 8) {
    let arr = number.toString().split('').map(number => number * number);
    let sum = arr.reduce((a,b) => a + b, 0);

    if (sum == 1) {
      return true;
    } else {
      counter++;
      isHappyNumber(sum, counter);
    }
  }
  return false;
}

console.log(isHappyNumber(7));
console.log(isHappyNumber(19));
console.log(isHappyNumber(21));
console.log(isHappyNumber(69));