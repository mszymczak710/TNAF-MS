function range(a,b) {
  let arr = [];
    for(let i = Math.floor(a); i <= Math.floor(b); i++) {
      arr.push(i);
    }
    return arr;
}

console.log(range(5,7));